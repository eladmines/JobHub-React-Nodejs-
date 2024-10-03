import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { UsernameInput } from '../Inputs/UsernameInput';
import { PasswordInput } from '../Inputs/PasswordInput';
import {TextInput} from '../Inputs/TextInput';
import {createUser} from '../../services/User/createUser';
import { NumbersInput } from '../Inputs/NumbersInput';
import { ListInput } from '../Inputs/ListInput.js';
import {MultiChoiceInput} from '../Inputs/MultiChoiceInput'
import { technologies, jobRoles } from '../../constants/RegisterPage.js';
import { useNavigate } from 'react-router-dom';
export function RegisterForm() {
  const [validForm, setValidForm] = useState({ username: false, password: false, experience:false });
  const navigate = useNavigate();
  const handleDataFromChildren = (key, isValid) => {
    setValidForm((prevValidForm) => ({
      ...prevValidForm,
      [key]: isValid,
    }));
  };


  const disableRegisterButton = () => {
    return !(validForm['username'][1] && validForm['password'][1] && validForm['experience'][1]);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const username = validForm.username;
    const password = validForm.password;
    const experience = validForm.experience;
    const role = validForm.Role;
    const company = validForm.Company;
    const skills = validForm.Skills;
    
    if (username && password) {
      try {
        const userData = { username:username[0], password:password[0],experience:experience[0],role:role[0] ,company:company[0],skills:skills};
        var res = await createUser(userData);
        if (res) {
          navigate('/login');
        }
        
      } catch (error) {
        console.error("Registration error:", error);
      }
    }
  };

  return (
    <Form className="needs-validation" noValidate onSubmit={handleRegister}>
      <Row className="g-3">
        <Col xs={12}>
          <UsernameInput checkValidInputs={handleDataFromChildren} />
        </Col>
        <Col xs={12}>
          <PasswordInput checkValidInputs={handleDataFromChildren} />
        </Col>
        <Col xs={12}>
          <ListInput options = {jobRoles} name="Role" handleChildren={handleDataFromChildren}/>
        </Col>
        <Col xs={12}>
          <TextInput name="Company" placeholder="Company" handleChildren={handleDataFromChildren}/>
        </Col>
        <Col xs={12}>
          <NumbersInput checkValidInputs={handleDataFromChildren} name="experience" placeholder="Experience" />
        </Col>
        <Col xs={12}>
          <MultiChoiceInput name="Skills" choices = {technologies} handleChildren={handleDataFromChildren}/>
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
      </Row>
    </Form>
  );
}
