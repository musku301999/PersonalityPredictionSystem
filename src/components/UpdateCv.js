import { ToastContainer, toast } from 'react-toastify';
import { Button, Form, FormGroup, Label, Input, FormText,Alert } from 'reactstrap';
import axios from 'axios';
import baseUrl from '../services/BootApi'

import React, { Component } from 'react';

import CandidateCvServices from '../services/CandidateCvServices';

class UpdateCv extends Component {
  constructor(props) {
    super(props)
    this.state = {
      candidateName: '',
      email: this.props.match.params.email,
      phoneNo: '',
      qualification: '',
      experience: '',
      skill: '',
      candidateNameError: '',
      emailError: '',
      phoneNoError: '',
      phoneNoLengthError:'',
      qualificationError: '',
      experienceError: '',
      skillError: ''


    }

    this.candidateNameChangeHandler = this.candidateNameChangeHandler.bind(this);
    this.emailChangeHandler = this.emailChangeHandler.bind(this);
    this.phoneNoChangeHandler = this.phoneNoChangeHandler.bind(this);
    this.qualChangeHandler = this.qualificationChangeHandler.bind(this);
    this.experienceChangeHandler = this.experienceChangeHandler.bind(this);
    this.skillChangeHandler = this.skillChangeHandler.bind(this);
    this.updateCv = this.updateCv.bind(this);

  }
  componentDidMount(){
      CandidateCvServices.getCvByEmail(this.state.email).then((res)=>{
let cv =res.data;
this.setState({
    candidateName: cv.candidateName,
    email: cv.email,
    phoneNo: cv.phoneNo,
    
      qualification: cv.qualification,
      experience: cv.experience,
       skill: cv.skill

         })
      })
      
  }


  validate = () => {
    const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    let candidateNameError = '';
    let emailError = '';
    let phoneNoError = '';
    let phoneNoLengthError='';
    let qualificationError = '';
    let experienceError = '';
    let skillError = '';
    if (!this.state.candidateName){
      candidateNameError = "Name cannot be blank";
    }
    if (!validEmailRegex.test(this.state.email)){
      emailError = "Invalid email";
    }
    if (!this.state.phoneNo){
      phoneNoError = "Number cannot be blank";
    }
    if (!this.state.qualification){
      qualificationError = "Qualification cannot be blank";
    }
    if (!this.state.experience){
      experienceError = "Experience cannot be blank";
    }
    if (!this.state.skill){
      skillError = "Skill cannot be blank";
    }
    if (this.state.phoneNo.length!=10){
      phoneNoLengthError="Mobile number should be of 10 digits"
    }

    if (emailError ||candidateNameError||phoneNoError||qualificationError||experienceError||skillError||phoneNoLengthError) {
      this.setState({ emailError ,candidateNameError,phoneNoError,qualificationError,experienceError,skillError,phoneNoLengthError});
      return false;
    }
    return true;

  }


  updateCv = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    let cv = {
      candidateName: this.state.candidateName, email: this.state.email,
       phoneNo: this.state.phoneNo, experience: this.state.experience,
      qualification: this.state.qualification, skill: this.state.skill
    };
   if (isValid) {
      console.log("cv:" + JSON.stringify(cv));
    
      
      CandidateCvServices.updateCv(cv, this.state.email).then(res => {
        this.props.history.push('/view-cv')
       toast.success("Cv created succesfully.") 
       this.cancel();


     }, error => {
       toast.error("You cannot create cv with same email! ")
       this.cancel();
      });
    }
  }

  candidateNameChangeHandler(event) {
    this.setState({ candidateName: event.target.value });

  }
  emailChangeHandler(event) {
    this.setState({ email: event.target.value });
  }
  phoneNoChangeHandler(event) {
    this.setState({ phoneNo: event.target.value });
  }
  qualificationChangeHandler(event) {
    this.setState({ qualification: event.target.value });
  }
  experienceChangeHandler(event) {
    this.setState({ experience: event.target.value });
  }
  skillChangeHandler(event) {
    this.setState({ skill: event.target.value });
  }
  cancel() {
    this.props.history.push('/view-cv');
}


  render() {
    return (
      <div style={{ 'position': 'relative', 'overflowY': 'auto', 'height': '60vh', 'display': 'block' }}>
       
        <div>
          <div style={{ textAlign: "center", fontFamily: "monospace" }}>
            <h1> Update Your Cv</h1>
          </div>
         
          <Form id="form">
          
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="Enter your Full Name"
                value={this.state.candidateName} onChange={this.candidateNameChangeHandler} />
              <div style={{color:"red"}}>{this.state.candidateNameError}</div>
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
                value={this.state.phoneNo} onChange={this.phoneNoChangeHandler} />
              <div style={{color:"red"}} >{this.state.phoneNoError}</div>
              <div style={{color:"red"}} >{this.state.phoneNoLengthError}</div>
            </FormGroup>

            <FormGroup>
              <Label for="qual">Qualification</Label>
              <Input type="text" name="qual" id="qual" placeholder="Enter your Qualification"
                value={this.state.qualification} onChange={this.qualificationChangeHandler} />

              <div style={{color:"red"}}>{this.state.qualificationError}</div>
            </FormGroup>
            <FormGroup>
              <Label for="exp">Experience</Label>
              <Input type="text" name="exp" id="exp" placeholder="Enter your experience"
                value={this.state.experience} onChange={this.experienceChangeHandler} />
              <div style={{color:"red"}}>{this.state.experienceError}</div>
            </FormGroup>

            <FormGroup>
              <Label for="skill">Skills</Label>
              <Input type="text" name="skill" id="skill" placeholder="Enter your technical skills"
                value={this.state.skill} onChange={this.skillChangeHandler}/>
              <div style={{color:"red"}}>{this.state.skillError}</div>
            </FormGroup>


            <Button type="submit" color="info" onClick={this.updateCv}>Submit</Button>
            <Button color="danger ml-3" onClick={this.cancel.bind(this)}>Cancel</Button>
          

          </Form>
        </div>

      </div>
    );
  }
}

export default UpdateCv;




