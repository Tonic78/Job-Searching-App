import React from "react";
import { Form, Col } from "react-bootstrap";

export default function SearchOptions() {
  return (
    <Form className="mb-4">
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          <Form.Control onChange={} value={} name="description" type="text" />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Location</Form.Label>
          <Form.Control onChange={} value={} name="location" type="text" />
        </Form.Group>
      </Form.Row>
    </Form>
  );
}
