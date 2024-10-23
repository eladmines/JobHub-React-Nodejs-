import React, { useState } from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FaFile } from 'react-icons/fa';
import axios from 'axios';
import { LoadingBar } from './LoadingBar';
import { Language } from './Languages/Language';
import { SERVER } from '../constants/CompaniesLogo';
export function UploadCVCard() {
    const [uploading, setUploading] = useState(false);
    const [skills, setSkills] = useState(() => {
        const storedSkills = localStorage.getItem('skills');
        return storedSkills ? storedSkills.split(",") : [];
    });
    const [newLanguage, setNewLanguage] = useState('');

    const handleFileChange = async (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            const formData = new FormData();
            formData.append('cv', files[0]);
            setUploading(true);

            try {
                const response = await axios.post(SERVER+'user/cv', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });

                const { data } = response.data;
                const allSkills = [
                    ...data["Technologies"].split(","),
                    ...data["ProgrammingLanguages"].split(",")
                ];

                localStorage.setItem('firstname', data["FirstName"]);
                localStorage.setItem('skills', allSkills.join(","));
                setSkills(allSkills);
            } catch (error) {
                console.error("Error uploading file:", error);
            } finally {
                setUploading(false);
            }
        }
    };

    const handleAddLanguage = () => {
        if (newLanguage && !skills.includes(newLanguage)) {
            const updatedSkills = [...skills, newLanguage];
            setSkills(updatedSkills);
            localStorage.setItem('skills', updatedSkills.join(","));
            setNewLanguage('');
        } else {
            console.warn('Language already added or empty');
        }
    };

    const handleRemoveSkill = (skillToRemove) => {
        const updatedSkills = skills.filter(skill => skill !== skillToRemove);
        setSkills(updatedSkills);
        localStorage.setItem('skills', updatedSkills.join(","));
    };

    const resetCV = () => {
        localStorage.removeItem('skills');
        setSkills([]);
    };

    const renderContent = () => {
        if (uploading) {
            return (
                <Row className="align-items-center">
                    <LoadingBar title="Upload and analyze your resume" />
                </Row>
            );
        }

        if (skills.length > 0) {
            return (
                <Row>
                    <Card.Title className="text-center">
                        Hello {localStorage.getItem('firstname')}
                    </Card.Title>
                    <Card.Text className="text-center">
                        We’ve analyzed your resume and identified the following skills:
                    </Card.Text>
                    <Card.Text className="text-center">
                        Now you can go to the Jobs page and find relevant opportunities especially for you!
                    </Card.Text>
                    {skills.map((skill) => (
                        <Col xs={6} sm={4} md={3} key={skill}>
                            <Language language={skill} handleRemoveLanguage={handleRemoveSkill} />
                        </Col>
                    ))}
                    <Col xs={12}>
                        <Form.Group controlId="formAddLanguage">
                            <Form.Label>Add Language</Form.Label>
                            <Form.Control
                                type="text"
                                value={newLanguage}
                                onChange={(e) => setNewLanguage(e.target.value)}
                                placeholder="Type a language..."
                            />
                            <Button
                                variant="outline-primary"
                                className="d-flex align-items-center mt-2 w-100"
                                onClick={handleAddLanguage}
                            >
                                <FaFile className="me-2" />
                                Add Skill
                            </Button>
                            <Button
                                variant="outline-primary"
                                className="d-flex align-items-center mt-2 w-100"
                                onClick={resetCV}
                            >
                                <FaFile className="me-2" />
                                Upload New CV
                            </Button>
                        </Form.Group>
                    </Col>
                </Row>
            );
        }

        return (
            <>
                <Card.Title className="text-center">Upload Your CV</Card.Title>
                <Row className="align-items-center">
                    <Col md={4} className="text-center">
                        <img
                            src="https://img.freepik.com/premium-vector/resume-keyword-scanner-flat-illustration_120816-37787.jpg"
                            alt="Upload CV"
                            className="img-fluid rounded"
                            style={{ maxHeight: '150px' }}
                        />
                    </Col>
                    <Col md={4} className="text-center">
                        <Card.Text>
                            Please upload your CV in PDF or Word format. Ensure that your CV is up to date and highlights your relevant skills and experiences.
                        </Card.Text>
                    </Col>
                    <Col md={4}>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            id="cvUpload"
                            accept=".pdf, .doc, .docx"
                            className="d-none"
                        />
                        <Button
                            variant="outline-primary"
                            className="d-flex align-items-center mt-2 w-100"
                            onClick={() => document.getElementById('cvUpload').click()}
                        >
                            <FaFile className="me-2" />
                            Choose File
                        </Button>
                    </Col>
                </Row>
            </>
        );
    };

    return (
        <Row className="justify-content-center">
            <Col md={12}>
                <Card className="p-4">
                    <Card.Body>
                        {renderContent()}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}
