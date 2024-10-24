import React, { useState, useEffect } from 'react';
import { Form, Container } from 'react-bootstrap';
import './SearchBarInput.css';

export function SearchBarInput({ value, getSearchFormValue }) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value); 
  }, [value]);

  function onChangeHandler(event) {
    setInputValue(event.target.value);
    getSearchFormValue(event.target.value);
  }

  return (
    <Container className="search-bar-container">
      <Form className="search-form d-flex align-items-center" method="POST" action="#">
        <Form.Control
          type="text"
          name="query"
          placeholder="Search"
          title="Enter search keyword"
          className="search-input"
          value={inputValue}
          onChange={onChangeHandler}
        />
      </Form>
    </Container>
  );
}
