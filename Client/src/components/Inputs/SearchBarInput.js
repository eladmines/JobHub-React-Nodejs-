import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';  // Importing a search icon from react-icons
import { useState } from 'react';
import './SearchBarInput.css';
export function SearchBarInput({getSearchFormValue}) {
  const [value,setValue] = useState('')

  function onChangeHandler(event){
    setValue(event.target.value);
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
      onChange={onChangeHandler}
    />
  </Form>
</Container>
  );
}
