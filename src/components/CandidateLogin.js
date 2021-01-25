
import {Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Jumbotron,
  
  Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
  import React, { Component } from 'react';
  
  class CandidateLogin extends Component {
    constructor(props) {
      super(props);
      this.home=this.home.bind(this);
    }
    home(){
      this.props.history.push("/home")
    }
    render() {
      return (
        <div>
          <span className="block-example border border-dark">
    <Card className="text-center mb-1" style={{ width: '100%',height:"100%" }}>
    <CardBody>
    <Container className="text-center">
      <h2>Candidate Login</h2>
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
        <Button color="danger" size="lg" outline onClick={this.home}>Login</Button>
        <div>
        <a href="/candidate-register"> Not a user? Click Here</a>
        </div>
        
      </Form>
    </Container>
    </CardBody>
    </Card>
    </span>
        </div>
      );
    }
  }
  
  export default CandidateLogin;
 