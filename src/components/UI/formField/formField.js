import React from 'react';
import {Col, FormGroup, Input, Label} from "reactstrap";

const FormField = (
  {name, type, placeholder, onChange, title, value, required, className}
) => (
  <FormGroup row>
    <Label for={name} sm={2}>{title}</Label>
    <Col sm={10}>
      <Input
        className={className}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required={required}
      />
    </Col>
  </FormGroup>
);

export default FormField;