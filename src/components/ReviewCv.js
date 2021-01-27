import React, { Component, Fragment } from 'react';
import { Table, Button, Row, Col, Container } from 'reactstrap';
import AppliedJobService from '../services/AppliedJobService';
import AdminHomeMenu from './AdminHomeMenu';
// import SearchByParam from './SearchByParam';
// import CvService from '../services/CvService'
import { Redirect } from 'react-router-dom';
class ReviewCv extends Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token1")
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }

        this.state = {
            applicants: [],
            loggedIn
        }

        this.reviewCv = this.reviewCv.bind(this);
    }
    editcv(email) {
        this.props.history.push(`/validate-cv/${email}`);

    }
    componentDidMount() {
        AppliedJobService.getCv().then(res => {
            this.setState({ applicants: res.data });
        })
    }

    reviewCv(id) {
        this.props.history.push(`/acceptrejectcv/${id}`);
    }

    render() {
        if(this.state.loggedIn==false){
            return <Redirect to="/admin-login" />
            
        }
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={4}>
                            <AdminHomeMenu />
                        </Col>
                        <Col md={8}>
                            <Fragment>
                                <div style={{ 'position': 'relative', 'overflowY': 'auto', 'height': '50vh', 'display': 'block' }}>
                                    <Table bordered>
                                        <thead style={{ 'backgroundColor': '#C1C8E4' }}>
                                            <tr>
                                                <th>Candidate Name</th>
                                                <th>Candidate Email</th>
                                                <th>Phone No</th>
                                                <th>Candidate Qualification</th>
                                                <th>Candidate Experience</th>
                                                <th>Skill</th>
                                                <th>Applied for Job</th>
                                                <th>Cv Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.applicants.map(
                                                    applicant =>
                                                    <tr key={applicant.email}>
                                                    <td>{applicant.candidateName}</td>
                                                    <td>{applicant.email}</td>
                                                    <td> {applicant.phoneNo}</td>
                                                    <td> {applicant.qualification}</td>
                                                    <td> {applicant.experience}</td>
                                                    <td> {applicant.skill}</td>
                                                    <td>{applicant.appliedjob}</td>
                                                    <td>{applicant.result}</td>
                                                            <td>
                                                                <Button color='info' outline size='sm'
                                                                onClick={() => this.editcv(applicant.email)} > Review</Button>
                                                            </td>
                                                        </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                            </Fragment>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default ReviewCv;