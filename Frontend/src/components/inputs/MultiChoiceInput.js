import { useState,useEffect } from 'react';
import { Form, InputGroup, Row, Col } from 'react-bootstrap';

export function MultiChoiceInput({handleChildren,choices,name}) {
  const [selectedcheckboxes, setSelectedcheckboxes] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedcheckboxes((prevcheckboxes) => [...prevcheckboxes, value]);
    } else {
      setSelectedcheckboxes((prevcheckboxes) =>
        prevcheckboxes.filter((tech) => tech !== value)
      );
    } 
  };

  useEffect(() => {
    handleChildren(name, selectedcheckboxes);
  }, [selectedcheckboxes]);

  return (
   
      <InputGroup>
        <Row>
          {choices.map((tech, index) => (
            <Col key={tech} xs={12} md={4} style={{ marginBottom: '10px' }}>
              <Form.Check
                type="checkbox"
                id={tech}
                label={tech}
                value={tech}
                onChange={handleCheckboxChange}
              />
            </Col>
          ))}
        </Row>
      </InputGroup>
    
  );
}
