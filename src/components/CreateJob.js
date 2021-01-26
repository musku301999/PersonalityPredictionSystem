import React, { Component } from 'react';
import { Form, FormGroup, Input, Container, Button, Label, Col, Alert, Row } from 'reactstrap';
import JobService from '../services/JobService';
import AdminHomeMenu from './AdminHomeMenu';

const intialState = {
    jobDes: '',
    reqSkills: '',
    experience: '',
    qualification: '',
    desError: '',
    skillError: '',
    expError: '',
    qualError: ''
}

class CreateJob extends Component {
    constructor(props) {
        super(props)

        this.state = intialState;

        this.changeJobDesHandler = this.changeJobDesHandler.bind(this);
        this.changeReqSkillsHandler = this.changeReqSkillsHandler.bind(this);
        this.changeExpHandler = this.changeExpHandler.bind(this);
        this.changeQualHandler = this.changeQualHandler.bind(this);
        this.saveJob = this.saveJob.bind(this);
    }

    validate = () => {
        let desError = ''
        let skillError = '';
        let expError = '';
        let qualError = ''

        if (!this.state.jobDes) {
            desError = "Job Description cannot be blank";
        }
        else if (this.state.jobDes.length < 3) {
            desError = "Job Description must be at least 2 character"
        }

        if (!this.state.reqSkills) {
            skillError = "Required Skills cannot be blank";
        }
        else if (this.state.reqSkills.length < 3) {
            skillError = "Required Skills must be at least 2 character"
        }

        if (!this.state.experience) {
            expError = "Experience cannot be blank";
        }
        else if (this.state.reqSkills.experience > 15) {
            skillError = "Experience cannot be more than 15 years"
        }

        if (!this.state.qualification) {
            qualError = "Qualification cannot be blank";
        }
        else if (this.state.qualification.length < 3) {
            qualError = "Qualification must be at least 2 character"
        }

        if (desError || skillError || expError || qualError) {
            this.setState({ desError, skillError, expError, qualError });
            return false;
        }

        return true;
    };

    saveJob = (e) => {
        e.preventDefault();

        const isValid = this.validate();

        if (isValid) {
            let job = {
                jobDes: this.state.jobDes,
                reqSkills: this.state.reqSkills,
                experience: this.state.experience,
                qualification: this.state.qualification
            };
            console.log('job : ' + JSON.stringify(job));
            <div> <Alert color='info'>Job addded succesfully</Alert> </div>
            JobService.createJob(job).then(res => {
                this.props.history.push('/job');
            });
        }

    }

    changeJobDesHandler(event) {
        this.setState({ jobDes: event.target.value });
    }

    changeReqSkillsHandler(event) {
        this.setState({ reqSkills: event.target.value });
    }

    changeExpHandler(event) {
        this.setState({ experience: event.target.value });
    }

    changeQualHandler(event) {
        this.setState({ qualification: event.target.value });
    }

    cancel() {
        this.props.history.push('/job');
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={4}>
                            <AdminHomeMenu />
                        </Col>
                        <Col md={8}>
                            <div style={{ 'position': 'relative', 'overflowY': 'auto', 'height': '60vh', 'display': 'block' }}>
                                <h3 >Add Job</h3>
                                <br />
                                <Form>
                                    <FormGroup row>
                                        <Label for='jobDescription' sm={5}>Job Description</Label>
                                        <Col sm={6}>
                                            <Input placeholder="Enter job description here" name="description"
                                                value={this.state.jobDes} onChange={this.changeJobDesHandler}></Input>
                                            <div style={{ color: "red" }}>{this.state.desError}</div>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for='requiredSkill' sm={5}>Required Skills</Label>
                                        <Col sm={6}>
                                            <Input placeholder="Enter required skills here" name="skills"
                                                value={this.state.reqSkills} onChange={this.changeReqSkillsHandler}></Input>
                                            <div style={{ color: "red" }}>{this.state.skillError}</div>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for='experience' sm={5}>Experience Needed</Label>
                                        <Col sm={6}>
                                            <Input placeholder="Enter experience here" name="experience"
                                                value={this.state.experience} onChange={this.changeExpHandler} required></Input>
                                            <div style={{ color: "red" }}>{this.state.expError}</div>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for='qualification' sm={5}>Qualification Needed</Label>
                                        <Col sm={6}>
                                            <Input placeholder="Enter qualification here" name="qualification"
                                                value={this.state.qualification} onChange={this.changeQualHandler}></Input>
                                            <div style={{ color: "red" }}>{this.state.qualError}</div>
                                        </Col>
                                    </FormGroup>
                                    <Container>
                                        <br />
                                        <Button color="success" onClick={this.saveJob}>Save</Button>
                                        <Button color="danger ml-3" onClick={this.cancel.bind(this)}>Cancel</Button>
                                    </Container>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default CreateJob;