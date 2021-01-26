import React, { Component } from 'react';
import { Form, FormGroup, Input, Container, Button, Label, Col, Row } from 'reactstrap';
import { ToastContainer, toast } from "react-toastify";
import AppliedJobService from '../services/AppliedJobService';

class AcceptRejectCv extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            candEmail: '',
            candSkill: '',
            candQual: '',
            candExp: '',
            appliedJobDes: '',
            appliedJobSkill: '',
            appliedJobQual: '',
            appliedJobExp: ''
        }
    }

    componentDidMount() {

        AppliedJobService.getAppliedJobById(this.state.id).then(res => {
            let applicant = res.data;
            this.setState({
                candEmail: applicant.candEmail,
                candSkill: applicant.candSkill,
                candQual: applicant.candQual,
                candExp: applicant.candExp,
                appliedJobDes: applicant.appliedJobDes,
                appliedJobSkill: applicant.appliedJobSkill,
                appliedJobQual: applicant.appliedJobQual,
                appliedJobExp: applicant.appliedJobExp
            });
        })
    }

    render() {

        const handleBtnA= () =>{
            toast.success("Applicant has been accepted :)", {
                position: 'top-center'
            });
        };
    
        const handleBtnR= () =>{
            toast.error("Applicant has been rejected :(", {
                position: 'top-center'
            });
        };

        return (
            <div style={{height: '60vh', borderStyle : 'groove', borderWidth : '1px' }}>
                <Form className='mt-3'>
                    <FormGroup row className='ml-5'>
                        <Label for='candidateEmail' sm={3}>Candidate Email</Label>
                        <Col sm={8}>
                            <Input name="candEmail" value={this.state.candEmail} readOnly></Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row className='mt-4 ml-5'>
                        <Label for='appliedJobDesc' sm={3}>Applied for Job</Label>
                        <Col sm={8}>
                            <Input name="appliedJobDes" value={this.state.appliedJobDes} readOnly></Input>
                        </Col>
                    </FormGroup>
                    <Row form className='mt-4'>
                        <Col md={3}>
                            <Label>Required Qualification</Label>
                        </Col>
                        <Col md={3}>
                            <Input name="appliedJobQual" value={this.state.appliedJobQual} readOnly></Input>
                        </Col>
                        <Col md={3}>
                            <Label>Candidate Qualification</Label>
                        </Col>
                        <Col md={3}>
                            <Input name="candQual" value={this.state.candQual} readOnly></Input>
                        </Col>
                    </Row>
                    <Row form className='mt-4'>
                        <Col md={3}>
                            <Label>Required Skills</Label>
                        </Col>
                        <Col md={3}>
                            <Input name="appliedJobSkill" value={this.state.appliedJobSkill} readOnly></Input>
                        </Col>
                        <Col md={3}>
                            <Label>Candidate Skills</Label>
                        </Col>
                        <Col md={3}>
                            <Input name="candSkill" value={this.state.candSkill} readOnly></Input>
                        </Col>
                    </Row>
                    <Row form className='mt-4'>
                        <Col md={3}>
                            <Label>Required Experience</Label>
                        </Col>
                        <Col md={3}>
                            <Input name="appliedJobExp" value={this.state.appliedJobExp} readOnly></Input>
                        </Col>
                        <Col md={3}>
                            <Label>Candidate Experience</Label>
                        </Col>
                        <Col md={3}>
                            <Input name="candExp" value={this.state.candExp} readOnly></Input>
                        </Col>
                    </Row>
                </Form>
                <ToastContainer />
                <Container className='mt-3'>
                    <br />
                    <Button color="info" onClick={handleBtnA} >Accept</Button>
                    <Button color="danger ml-3" onClick={handleBtnR} >Reject</Button>
                </Container>
            </div>
        );
    }
}

export default AcceptRejectCv;