import { ToastContainer, toast } from 'react-toastify';
import { Button, Form, FormGroup, Label, Input, FormText,Alert, Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import baseUrl from '../services/BootApi'

import React, { Component } from 'react';
import CandidateCvServices from '../services/CandidateCvServices';
import CandidateHomeMenu from './CandidateHomeMenu';

class CreateCv extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      number: '',
      qual: '',
      exp: '',
      skill: '',
      nameError: '',
      emailError: '',
      numberError: '',
      numberLengthError:'',
      qualError: '',
      expError: '',
      skillError: ''


    }

    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.emailChangeHandler = this.emailChangeHandler.bind(this);
    this.numberChangeHandler = this.numberChangeHandler.bind(this);
    this.qualChangeHandler = this.qualChangeHandler.bind(this);
    this.expChangeHandler = this.expChangeHandler.bind(this);
    this.skillChangeHandler = this.skillChangeHandler.bind(this);
    this.save = this.save.bind(this)

  }

  cancel = () => {
    this.setState({
      name: '',
      email: '',
      number: '',
      qual: '',
      exp: '',
      skill: '',
      nameError: '',
      emailError: '',
      numberError: '',
      numberLengthError:'',
      qualError: '',
      expError: '',
      skillError: ''


    });
  }
  validate = () => {
    const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    let nameError = '';
    let emailError = '';
    let numberError = '';
    let numberLengthError='';
    let qualError = '';
    let expError = '';
    let skillError = '';
    if (!this.state.name){
      nameError = "Name cannot be blank";
    }
    if (!validEmailRegex.test(this.state.email)){
      emailError = "Invalid email";
    }
    if (!this.state.number){
      numberError = "Number cannot be blank";
    }
    if (!this.state.qual){
      qualError = "Qualification cannot be blank";
    }
    if (!this.state.exp){
      expError = "Experience cannot be blank";
    }
    if (!this.state.skill){
      skillError = "Skill cannot be blank";
    }
    if (this.state.number.length!=10){
      numberLengthError="Mobile number should be of 10 digits"
    }

    if (emailError ||nameError||numberError||qualError||expError||skillError||numberLengthError) {
      this.setState({ emailError ,nameError,numberError,qualError,expError,skillError,numberLengthError});
      return false;
    }
    return true;

  }


  save = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    let cv = {
      candidateName: this.state.name, email: this.state.email, phoneNo: this.state.number, experience: this.state.exp,
      qualification: this.state.qual, skill: this.state.skill
    }
    if (isValid) {
      console.log("cv=>" + JSON.stringify(cv));
    
      
      CandidateCvServices.creatCv(cv).then(res => {
        toast.success("Cv created succesfully.") 
        this.cancel();


      }, error => {
        toast.error("You cannot create cv with same email! ")
        this.cancel();
      })
     }
  }

  nameChangeHandler(event) {
    this.setState({ name: event.target.value });

  }
  emailChangeHandler(event) {
    this.setState({ email: event.target.value });
  }
  numberChangeHandler(event) {
    this.setState({ number: event.target.value });
  }
  qualChangeHandler(event) {
    this.setState({ qual: event.target.value });
  }
  expChangeHandler(event) {
    this.setState({ exp: event.target.value });
  }
  skillChangeHandler(event) {
    this.setState({ skill: event.target.value });
  }


  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={4}>
              <CandidateHomeMenu/>

            </Col>
            <Col md={8}>

            <div style={{ 'position': 'relative', 'overflowY': 'auto', 'height': '60vh', 'display': 'block' }}>
        <ToastContainer/>
        <div>
          <div style={{ textAlign: "center", fontFamily: "monospace" }}>
            <h1> Create Your Cv </h1>
          </div>
         
          <Form id="form">
          
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="Enter your Full Name"
                value={this.state.name} onChange={this.nameChangeHandler} />
              <div style={{color:"red"}}>{this.state.nameError}</div>
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Enter your Email"
                value={this.state.email} onChange={this.emailChangeHandler} />
              <div style={{color:"red"}}>{this.state.emailError}</div>
            </FormGroup>
            <FormGroup>
              <Label for="number">Phone Number</Label>
              <Input type="number" name="number" id="number" placeholder="Enter your Phone number"
                value={this.state.number} onChange={this.numberChangeHandler} />
              <div style={{color:"red"}} >{this.state.numberError}</div>
              <div style={{color:"red"}} >{this.state.numberLengthError}</div>
            </FormGroup>

            <FormGroup>
              <Label for="qual">Qualification</Label>
              <Input type="text" name="qual" id="qual" placeholder="Enter your Qualification"
                value={this.state.qual} onChange={this.qualChangeHandler} />

              <div style={{color:"red"}}>{this.state.qualError}</div>
            </FormGroup>
            <FormGroup>
              <Label for="exp">Experience</Label>
              <Input type="text" name="exp" id="exp" placeholder="Enter your experience"
                value={this.state.exp} onChange={this.expChangeHandler} />
              <div style={{color:"red"}}>{this.state.expError}</div>
            </FormGroup>

            <FormGroup>
              <Label for="skill">Skills</Label>
              <Input type="text" name="text" id="exampleText" placeholder="Enter your technical skills"
                value={this.state.skill} onChange={this.skillChangeHandler}/>
              <div style={{color:"red"}}>{this.state.skillError}</div>
            </FormGroup>


            <Button type="submit" color="primary" onClick={this.save}>Submit</Button>
            <ToastContainer />

          </Form>
        </div>

      </div>
            
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CreateCv;




