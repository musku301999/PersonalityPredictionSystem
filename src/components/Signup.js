import React from 'react';
import {Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Jumbotron,
  
  Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
 const Signup = (props) => {
  return (
    <span className="block-example border border-dark">
    <Card className="text-center mb-1" style={{ width: '100%',height:"100%" }}>
    <CardBody>
    <Container className="text-center">
      <h2>SIGN UP</h2>
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
          <FormGroup>
<Label for="address">Address</Label>
<Input type="text" name="address" id="address" placeholder="Enter your Address" />
</FormGroup>
<FormGroup>
<Label for="state">State</Label>
<Input type="text" name="state" id="state" placeholder="Enter your State" />
</FormGroup>
<FormGroup>
<Label for="city">City</Label>
<Input type="text" name="city" id="city" placeholder="Enter your City" />
</FormGroup>

        </Col>
        <Button color="danger" size="lg" outline >SIGN UP</Button>
      </Form>
    </Container>
    </CardBody>
    </Card>
    </span>
  );
}

export default Signup;