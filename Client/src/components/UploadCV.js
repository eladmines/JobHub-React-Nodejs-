import React, { useState } from 'react';
import { Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';
import { FaFile, FaSearch } from 'react-icons/fa';
import axios from 'axios';
import { LoadingBar } from './LoadingBar';
import { Language } from './Languages/Language';
import { SERVER } from '../constants/CompaniesLogo';
import { useNavigate } from 'react-router-dom';

export function UploadCVCard() {
    const navigate = useNavigate();
    const [uploading, setUploading] = useState(false);
    const [skills, setSkills] = useState(() => {
        const storedSkills = localStorage.getItem('skills');
        return storedSkills ? storedSkills.split(",") : [];
    });
    const [newLanguage, setNewLanguage] = useState('');
    const [searchValue, setSearchValue] = useState('');

    const handleFileChange = async (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            const formData = new FormData();
            formData.append('cv', files[0]);
            setUploading(true);

            try {
                const response = await axios.post(`${SERVER}user/cv`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                const { data } = response.data;
                const allSkills = [
                    ...data.Technologies.split(","),
                    ...data.ProgrammingLanguages.split(",")
                ];

                localStorage.setItem('firstname', data.FirstName);
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

    const handleSearch = () => {
        navigate('/jobs', { state: { searchValue } });
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
                    {skills.map(skill => (
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
                                onChange={e => setNewLanguage(e.target.value)}
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
                            <Button
                                variant="outline-success"
                                className="d-flex align-items-center mt-2 w-100"
                                onClick={() => navigate('/jobs')}
                            >
                                <FaSearch className="me-2" />
                                Find Jobs!
                            </Button>
                        </Form.Group>
                    </Col>
                </Row>
            );
        }

        return (
            <Row className="align-items-center">
                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center position-relative">
                        <Col md={6} className="text-center">
                            <Card.Title className="text-center">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/2206/2206371.png"
                                    alt="Job Search Icon"
                                    style={{ width: '24px', marginRight: '8px' }}
                                />
                                Job Search
                            </Card.Title>
                            <p className="mb-2">
    Use the search feature to find job opportunities that match your skills and interests. Simply enter relevant keywords or job titles, and we’ll help you discover positions that align with your career goals.
</p>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Search for jobs"
                                    aria-label="Search for jobs"
                                    value={searchValue}
                                    onChange={e => setSearchValue(e.target.value)}
                                />
                                <Button variant="primary" id="button-addon2" onClick={handleSearch}>
                                    <FaSearch />
                                </Button>
                            </InputGroup>
                        </Col>

                        <div className="position-relative mx-3" style={{ width: '2px', height: '150px', borderLeft: '2px dotted #000' }}>
                            <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '0 10px' }}>
                                OR
                            </span>
                        </div>

                        <Col md={6} className="text-center">
                            <Card.Title className="text-center">
                                <img
                                    src="https://cdn0.iconfinder.com/data/icons/job-resume-1/665/6-_Upload_Resume-512.png"
                                    alt="CV Upload Icon"
                                    style={{ width: '24px', marginRight: '8px' }}
                                />
                                Upload Your CV
                            </Card.Title>
                            <Card.Text>
                                Please upload your CV in PDF or Word format. Ensure that your CV is up to date and highlights your relevant skills and experiences.
                            </Card.Text>
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
                    </div>
                </div>
            </Row>
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
