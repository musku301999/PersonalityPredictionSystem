import React, { Component } from 'react';


import AppliedJobService from '../services/AppliedJobService';
import { ToastContainer, toast } from 'react-toastify';
import { Button, Form, FormGroup, Label, Input, FormText, Alert, Container, Col, Row } from 'reactstrap';
import axios from 'axios';
import baseUrl from '../services/BootApi'
import CandidateHomeMenu from './CandidateHomeMenu'


import { Redirect } from 'react-router-dom';

import CandidateCvServices from '../services/CandidateCvServices';
import AdminHomeMenu from './AdminHomeMenu';


class AcceptRejectCv extends Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token1")
        let loggedIn = true;
        if (token == null) {
          loggedIn = false;
        }
    
        this.state = {
          candidateName: '',
          email: this.props.match.params.email,
          phoneNo: '',
          qualification: '',
          experience: '',
          skill: '',
          appliedjob: '',
          result:'',
          candidateNameError: '',
          emailError: '',
          phoneNoError: '',
          phoneNoLengthError: '',
          qualificationError: '',
          experienceError: '',
          skillError: '',
          appliedjobError: '',
          resultError:'',

          loggedIn
          
    
    
    
        }
    
        this.candidateNameChangeHandler = this.candidateNameChangeHandler.bind(this);
        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.phoneNoChangeHandler = this.phoneNoChangeHandler.bind(this);
        this.qualChangeHandler = this.qualificationChangeHandler.bind(this);
        this.experienceChangeHandler = this.experienceChangeHandler.bind(this);
        this.skillChangeHandler = this.skillChangeHandler.bind(this);
        this.appliedjobChangeHandler = this.appliedjobChangeHandler.bind(this);
        this.resultChangeHandler = this.resultChangeHandler.bind(this);
        
        this.updateCv = this.updateCv.bind(this);
    
      }
      componentDidMount() {
        CandidateCvServices.getCvByEmail(this.state.email).then((res) => {
          let cv = res.data;
          this.setState({
            candidateName: cv.candidateName,
            email: cv.email,
            phoneNo: cv.phoneNo,
    
            qualification: cv.qualification,
            experience: cv.experience,
            skill: cv.skill,
            appliedjob: cv.appliedjob,
            result: cv.result
    
          })
        })
    
      }
    
    
      validate = () => {
        const validEmailRegex =
          RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        let candidateNameError = '';
        let emailError = '';
        let phoneNoError = '';
        let phoneNoLengthError = '';
        let qualificationError = '';
        let experienceError = '';
        let skillError = '';
        let appliedjobError = '';
        let resultError = '';
        if (!this.state.candidateName) {
          candidateNameError = "Name cannot be blank";
        }
        if (!validEmailRegex.test(this.state.email)) {
          emailError = "Invalid email";
        }
        if (!this.state.phoneNo) {
          phoneNoError = "Number cannot be blank";
        }
        if (!this.state.qualification) {
          qualificationError = "Qualification cannot be blank";
        }
        if (!this.state.experience) {
          experienceError = "Experience cannot be blank";
        }
        if (!this.state.skill) {
          skillError = "Skill cannot be blank";
        }
        if (!this.state.appliedjob) {
          appliedjobError = "You cannot create your cv without applying for a job!";
        }
        if (!this.state.result) {
            resultError = "Please validate the cv with yes or no";
          }

        if (this.state.phoneNo.length != 10) {
          phoneNoLengthError = "Mobile number should be of 10 digits"
        }
    
        if (emailError || candidateNameError || phoneNoError || qualificationError || experienceError || skillError || appliedjobError ||resultError|| phoneNoLengthError) {
          this.setState({ emailError, candidateNameError, phoneNoError, qualificationError, experienceError, skillError,appliedjobError,resultError, phoneNoLengthError });
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
          qualification: this.state.qualification, skill: this.state.skill,
          appliedjob: this.state.appliedjob,
          result: this.state.result
        };
        if (isValid) {
          console.log("cv:" + JSON.stringify(cv));
    
    
          CandidateCvServices.updateCv(cv, this.state.email).then(res => {
            this.props.history.push('/validate-cv')
            toast.success("Cv updated succesfully.")
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
      appliedjobChangeHandler(event) {
        this.setState({ appliedjob: event.target.value });
      }
      resultChangeHandler(event) {
        this.setState({ result: event.target.value });
      }
      cancel() {
        this.props.history.push('/cv');
      }
    
    
      render() {
        if(this.state.loggedIn==false){
          return <Redirect to="/admin-login" />
          
      }
        return (
          <div>
            <Container>
              <Row>
                <Col md={3}>
                  <AdminHomeMenu />
                </Col>
                <Col md={9}>
                  <div style={{ 'position': 'relative', 'overflowY': 'auto', 'height': '60vh', 'display': 'block' }}>
    
                    <div>
                      <div style={{ textAlign: "center", fontFamily: "monospace" }}>
                        <h1> Validate the Cv</h1>
                      </div>
    
                      <Form id="form">
    
                        <FormGroup>
                          <Label for="name">Name</Label>
                          <Input type="text" name="name" id="name" placeholder="Enter your Full Name" readOnly
                            value={this.state.candidateName} onChange={this.candidateNameChangeHandler} />
                          <div style={{ color: "red" }}>{this.state.candidateNameError}</div>
                        </FormGroup>
                        <FormGroup>
                          <Label for="email">Email</Label>
                          <Input type="email" name="email" id="email" placeholder="Enter your Email" readOnly
                            value={this.state.email} onChange={this.emailChangeHandler} />
                          <div style={{ color: "red" }}>{this.state.emailError}</div>
                        </FormGroup>
                        <FormGroup>
                          <Label for="number">Phone Number</Label>
                          <Input type="number" name="number" id="number" placeholder="Enter your Phone number" readOnly
                            value={this.state.phoneNo} onChange={this.phoneNoChangeHandler} />
                          <div style={{ color: "red" }} >{this.state.phoneNoError}</div>
                          <div style={{ color: "red" }} >{this.state.phoneNoLengthError}</div>
                        </FormGroup>
    
                        <FormGroup>
                          <Label for="qual">Qualification</Label>
                          <Input type="text" name="qual" id="qual" placeholder="Enter your Qualification" readOnly
                            value={this.state.qualification} onChange={this.qualificationChangeHandler} />
    
                          <div style={{ color: "red" }}>{this.state.qualificationError}</div>
                        </FormGroup>
                        <FormGroup>
                          <Label for="exp">Experience</Label>
                          <Input type="text" name="exp" id="exp" placeholder="Enter your experience" readOnly
                            value={this.state.experience} onChange={this.experienceChangeHandler} />
                          <div style={{ color: "red" }}>{this.state.experienceError}</div>
                        </FormGroup>
    
                        <FormGroup>
                          <Label for="skill">Skills</Label>
                          <Input type="text" name="skill" id="skill" placeholder="Enter your technical skills" readOnly
                            value={this.state.skill} onChange={this.skillChangeHandler} />
                          <div style={{ color: "red" }}>{this.state.skillError}</div>
                        </FormGroup>
    
                        <FormGroup>
                        <Label for="appliedjob">Apply Job For </Label>
                        <Input type="text" name="text" id="exampleText" placeholder="Enter the Job Position you want to apply for" readOnly
                          value={this.state.appliedjob} onChange={this.appliedjobChangeHandler} />
                        <div style={{ color: "red" }}>{this.state.appliedjobError}</div>
                      </FormGroup>

                      <FormGroup>
                      <Label for="result"> Cv Status </Label>
                      <Input type="text" name="text" id="exampleText" placeholder="Enter Accepted or Rejected to validate the cv"
                        value={this.state.result} onChange={this.resultChangeHandler} />
                      <div style={{ color: "red" }}>{this.state.resultError}</div>
                    </FormGroup>
    
    
                        <Button type="submit" color="info" onClick={this.updateCv}>Submit</Button>
                        <Button color="danger ml-3" onClick={this.cancel.bind(this)}>Cancel</Button>
    
    
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
export default AcceptRejectCv;