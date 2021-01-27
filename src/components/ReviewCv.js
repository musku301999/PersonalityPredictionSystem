import React, { Component, Fragment } from 'react';
import { Table, Button, Row, Col, Container } from 'reactstrap';
import AppliedJobService from '../services/AppliedJobService';
import AdminHomeMenu from './AdminHomeMenu';
// import SearchByParam from './SearchByParam';
// import CvService from '../services/CvService'

class ReviewCv extends Component {

    constructor(props) {
        super(props)

        this.state = {
            applicants: []
        }

        this.reviewCv = this.reviewCv.bind(this);
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
                                                            <td>
                                                                <Button color='info' outline size='sm'
                                                                    onClick={() => this.reviewCv(applicant.applicantId)}> Review</Button>
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