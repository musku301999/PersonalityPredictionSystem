import React, { Component } from 'react';
import { Form, FormGroup, Input, Container, Button, Label, Col, Row } from 'reactstrap';
import JobService from '../services/JobService';
import AdminHomeMenu from './AdminHomeMenu';

class UpdateJob extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            jobDes: '',
            reqSkills: '',
            experience: '',
            qualification: ''
        }

        this.changeJobDesHandler = this.changeJobDesHandler.bind(this);
        this.changeReqSkillsHandler = this.changeReqSkillsHandler.bind(this);
        this.changeExpHandler = this.changeExpHandler.bind(this);
        this.changeQualHandler = this.changeQualHandler.bind(this);
        this.updateJob = this.updateJob.bind(this);
    }

    componentDidMount() {
        JobService.getJobById(this.state.id).then(res => {
            let job = res.data;
            this.setState({
                jobDes: job.jobDes,
                reqSkills: job.reqSkills,
                experience: job.experience,
                qualification: job.qualification
            })
        })
    }

    updateJob = (e) => {
        e.preventDefault();

        let job = {
            jobDes: this.state.jobDes,
            reqSkills: this.state.reqSkills,
            experience: this.state.experience,
            qualification: this.state.qualification
        };
        console.log('job : ' + JSON.stringify(job));

        JobService.updateJob(job, this.state.id).then(res => {
            this.props.history.push('/job')
        });

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
                            <AdminHomeMenu/>
                        </Col>
                        <Col md={8}>
                        <div style={{ 'position': 'relative', 'overflowY': 'auto', 'height': '60vh', 'display': 'block' }}>
                <h3>Update Job</h3>
                <br />
                <Form>
                    <FormGroup row>
                    <Label for='jobDescription' sm={5}>Job Description</Label>
                        <Col sm={6}>
                        <Input placeholder="Enter title here" name="description"
                            value={this.state.jobDes} onChange={this.changeJobDesHandler}></Input>
                            </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for='requiredSkill' sm={5}>Required Skills</Label>
                    <Col sm={6}>
                        <Input placeholder="Enter description here" name="skills"
                            value={this.state.reqSkills} onChange={this.changeReqSkillsHandler}></Input>
                            </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for='experience' sm={5}>Required Experience</Label>
                    <Col sm={6}>
                        <Input placeholder="Enter experience here" name="experience"
                            value={this.state.experience} onChange={this.changeExpHandler}></Input>
                            </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for='qualification' sm={5}>Required Qualification</Label>
                    <Col sm={6}>
                        <Input placeholder="Enter qualification here" name="qualification"
                            value={this.state.qualification} onChange={this.changeQualHandler}></Input>
                            </Col>
                    </FormGroup>
                    <Container>
                        <br />
                        <Button color="info" onClick={this.updateJob}>Update</Button>
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

export default UpdateJob;