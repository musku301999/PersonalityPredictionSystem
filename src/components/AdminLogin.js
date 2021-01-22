import React from 'react';
import {Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Jumbotron,
  
  Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
 const AdminLogin = (props) => {
  return (
    <span className="block-example border border-dark">
    <Card className="text-center mb-1" style={{ width: '100%',height:"100%" }}>
    <CardBody>
    <Container className="text-center">
      <h2>Admin Login</h2>
      <Form className="form">
        <Col>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="myemail@email.com"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
            />
          </FormGroup>
          
        </Col>
        <Button color="danger" size="lg" outline >Login</Button>
      </Form>
    </Container>
    </CardBody>
    </Card>
    </span>
  );
}

export default AdminLogin;