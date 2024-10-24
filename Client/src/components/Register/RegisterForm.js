import React, { useState,useEffect } from 'react';
import { Form, Row, Col, Button, Spinner } from 'react-bootstrap';
import { UsernameInput } from '../Inputs/UsernameInput';
import { PasswordInput } from '../Inputs/PasswordInput';
import { TextInput } from '../Inputs/TextInput';
import { NumbersInput } from '../Inputs/NumbersInput';
import { Language } from '../Languages/Language';
import { useFetchPost } from '../../hooks/useFetchPost';
import { useNavigate } from "react-router-dom";
import { FaFile } from 'react-icons/fa';
import axios from 'axios';

export function RegisterForm() {
  const { data: res, loading1, fetchData } = useFetchPost();
  const [validForm, setValidForm] = useState({
    username: '',
    password: '',
    FirstName: '',
    LastName: '',
    Experience: '',
    Role: '',
    Company: '',
    cvFile: null,
    Skills: [],
  });

  const navigate = useNavigate();
  
  const [newLanguage, setNewLanguage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAddLanguage = () => {
    if(validForm.Skills == null){
      setNewLanguage([newLanguage])
    }
    else if(newLanguage && !validForm.Skills.includes(newLanguage)) {
      setValidForm((prevValidForm) => ({
        ...prevValidForm,
        Skills: [...prevValidForm.Skills, newLanguage],
      }));
      setNewLanguage('');
    } else {
      console.warn('Language already added or empty');
    }
  };


  const handleRemoveLanguage = (languageToRemove) => {
    setValidForm((prevValidForm) => ({
      ...prevValidForm,
      Skills: prevValidForm.Skills.filter((language) => language !== languageToRemove),
    }));
  };

  const handleDataFromChildren = (key, value) => {
    setValidForm((prevValidForm) => ({
      ...prevValidForm,
      [key]: value,
    }));
  };


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setValidForm((prevValidForm) => ({
      ...prevValidForm,
      cvFile: file,
    }));
  };


  const handleStateChange = (name, value) => {
    const newValue = value.target ? value.target.value : value;
    setValidForm((prevValidForm) => ({
      ...prevValidForm,
      [name]: newValue,
    }));
  };


  const disableRegisterButton = () => {
    return !(validForm.username && validForm.password && validForm.Role && validForm.Company && validForm.Experience);
  };

  const signOut = async (e) => {
    e.preventDefault();
    
    await fetchData("user/createuser", validForm);
  };
  
  useEffect(() => {
    if(res){
      navigate("/login")
    }
  }, [res]);

  const fillFormUsingCV = async (e) => {
   
    
    e.preventDefault();
    if (!validForm.cvFile) {
      setError('Please upload your CV.');
      return;
    }

    setLoading(true);
    setError(''); 
    const formData = new FormData();

    Object.entries(validForm).forEach(([key, value]) => {
      if (key === 'cvFile' && value) {
        formData.append('cv', value);
      } else {
        formData.append(key, value);
      }
    });

    try {
      const response = await axios.post('/api/user/cv', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const { success, data } = response.data;

      if (success) {
        setValidForm(prevValidForm => ({
          ...prevValidForm,
          Company: data.Company,
          username: data.Email,
          FirstName: data.FirstName,
          LastName: data.LastName,
          Experience: data.TotalYearsofExperience,
          Role: data.Role,
          Skills: [
            ...(data.ProgrammingLanguages ? 
                data.ProgrammingLanguages.split(', ').map(item => item.trim()) : []),
            ...(data.Technologies ? 
                data.Technologies.split(', ').map(item => item.trim()) : [])
        ],
        cvFile:null
        
        
        }));
      } else {
        setError('Failed to register user.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setError('Error registering user, please try again.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <Form className="needs-validation" noValidate onSubmit={signOut}>
      <Row className="g-3">
        <Col xs={12}>
     
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
              
          <Button variant="secondary" onClick={fillFormUsingCV} disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : 'Fill Form Using CV'}
          </Button>
          
        </Col>

        <Col xs={12}>
          <UsernameInput
            value={validForm.username}
            onChange={(e) => handleStateChange('Email', e)}
            checkValidInputs={handleDataFromChildren}
          />
        </Col>

        <Col xs={12}>
          <PasswordInput
            value={validForm.password}
            onChange={(e) => handleStateChange('password', e)}
            checkValidInputs={handleDataFromChildren}
          />
        </Col>

        <Col xs={12}>
          <TextInput
            name="FirstName"
            placeholder="First Name"
            value={validForm.FirstName}
            onChange={(e) => handleStateChange('FirstName', e)}
          />
        </Col>
        <Col xs={12}>
          <TextInput
            name="LastName"
            placeholder="Last Name"
            value={validForm.LastName}
            onChange={(e) => handleStateChange('LastName', e)}
          />
        </Col>
        <Col xs={12}>
          <TextInput
            name="Role"
            placeholder="Role"
            value={validForm.Role}
            onChange={(e) => handleStateChange('Role', e)}
          />
        </Col>

        <Col xs={12}>
          <TextInput
            name="Company"
            placeholder="Company"
            value={validForm.Company}
            onChange={(e) => handleStateChange('Company', e)}
          />
        </Col>

        <Col xs={12}>
          <NumbersInput
            value={validForm.Experience}
            onChange={(e) => handleStateChange('Experience', e)}
            name="Experience"
            placeholder="Experience"
          />
        </Col>

        <Col xs={12}>
          <Row>
            {validForm.Skills && validForm.Skills.length > 0 ? (
              validForm.Skills.map((language) => (
                <Col xs={6} sm={4} md={3} key={language}>
                  <Language language={language} handleRemoveLanguage={handleRemoveLanguage} />
                </Col>
              ))
            ) : (
              <span>No languages</span>
            )}
          </Row>
        </Col>

        <Col xs={12}>
          <Form.Group controlId="formAddLanguage">
            <Form.Label>Add Language</Form.Label>
            <Form.Control
              type="text"
              value={newLanguage}
              onChange={(e) => setNewLanguage(e.target.value)}
              placeholder="Type a language..."
            />
            <Button onClick={handleAddLanguage} variant="primary" style={{ marginTop: '10px' }}>
              Add Language
            </Button>
          </Form.Group>
        </Col>

        <Col xs={12}>
          <Button
            type="submit"
            className="btn btn-primary w-100"
            disabled={disableRegisterButton()}
          >
            Sign-up
          </Button>
        </Col>

        {error && <Col xs={12}><div className="text-danger">{error}</div></Col>}
      </Row>
    </Form>
  );
}