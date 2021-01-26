
import { ToastContainer, toast } from 'react-toastify';

import {Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Jumbotron,
  
  Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
  import React, { Component } from 'react';
  import CandidateCvServices from '../services/CandidateCvServices';

  
  class Signup extends Component {
    constructor(props){
      super(props)
      this.state = {
        name: '',
        email: '',
        number: '',
        password: '',
        nameError: '',
        emailError: '',
        numberError: '',
        numberLengthError:'',
        passwordError: ''
        
  
  
      }
      this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.emailChangeHandler = this.emailChangeHandler.bind(this);
    this.numberChangeHandler = this.numberChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    this.save = this.save.bind(this)
    }

    cancel = () => {
      this.setState({
        name: '',
        email: '',
        number: '',
        password: '',
        
        nameError: '',
        emailError: '',
        numberError: '',
        numberLengthError:'',
        passwordError: ''
        
  
  
      });
    }

    validate = () => {
      const validEmailRegex = 
    RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
      let nameError = '';
      let emailError = '';
      let numberError = '';
      let numberLengthError='';
      let passwordError = '';
     
      if (!this.state.name){
        nameError = "Name cannot be blank";
      }
      if (!validEmailRegex.test(this.state.email)){
        emailError = "Invalid email";
      }
      if (!this.state.number){
        numberError = "Number cannot be blank";
      }
      if (!this.state.password){
        passwordError = "password cannot be blank";
      }
     
      if (this.state.number.length!=10){
        numberLengthError="Mobile number should be of 10 digits"
      }
  
      if (emailError ||nameError||numberError||passwordError||numberLengthError) {
        this.setState({ emailError ,nameError,numberError,passwordError,numberLengthError});
        return false;
      }
      return true;
  
    }
  
  
    save = (e) => {
      e.preventDefault();
      const isValid = this.validate();
      let cand = {
        candidateName: this.state.name, email: this.state.email, phoneNo: this.state.number, password: this.state.password
      }
      if (isValid) {
        console.log("cv=>" + JSON.stringify(cand));
      
        
        CandidateCvServices.register(cand).then(res => {
          toast.success("Cv created succesfully.") 
          this.cancel();
          this.props.history.push("/candidate-login")
          toast.success("Cv created succesfully.") 
  
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
    passwordChangeHandler(event) {
      this.setState({ password: event.target.value });
    }
   
  



    

    render() {
      return (
        <div style={{ 'position': 'relative', 'overflowY': 'auto', 'height': '60vh', 'display': 'block' }}>
        <ToastContainer/>
        <div>
          <div style={{ textAlign: "center", fontFamily: "monospace" }}>
            <h1>Sign Up</h1>
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
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="Enter your Password"
                value={this.state.password} onChange={this.passwordChangeHandler} />

              <div style={{color:"red"}}>{this.state.passwordError}</div>
            </FormGroup>


            <Button type="submit" color="primary" onClick={this.save}>Sign-Up</Button>
            <div>
              <a href="/candidate-login"> Already a User? Click Here</a>
            </div>
            <ToastContainer />

          </Form>
        </div>

      </div>
      );
    }
  }
  
  export default Signup;
