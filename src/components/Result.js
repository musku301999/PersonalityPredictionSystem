import React, { Component, Fragment } from 'react';
import { Table, Button, Row, Col, Container } from 'reactstrap';
import AppliedJobService from '../services/AppliedJobService';
<<<<<<< HEAD
import CandidateHomeMenu from '../components/CandidateHomeMenu'
import AdminHomeMenu from './AdminHomeMenu';
// import SearchByParam from './SearchByParam';
// import CvService from '../services/CvService'
import { Redirect } from 'react-router-dom';
class ReviewCv extends Component {
=======
import CandidateHomeMenu from './CandidateHomeMenu';
// import SearchByParam from './SearchByParam';
// import CvService from '../services/CvService'
import { Redirect } from 'react-router-dom';
class Result extends Component {
>>>>>>> 6b933da78a2880aecd8a3aa8d7a66d672352c7a7

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }

        this.state = {
            applicants: [],
            loggedIn
<<<<<<< HEAD
        }

        this.reviewCv = this.reviewCv.bind(this);
    }
    editcv(email) {
        this.props.history.push(`/validate-cv/${email}`);

    }
=======
        } 
    }
    
>>>>>>> 6b933da78a2880aecd8a3aa8d7a66d672352c7a7
    componentDidMount() {
        AppliedJobService.getCv().then(res => {
            this.setState({ applicants: res.data });
        })
    }

<<<<<<< HEAD
    reviewCv(id) {
        this.props.history.push(`/acceptrejectcv/${id}`);
    }

=======
>>>>>>> 6b933da78a2880aecd8a3aa8d7a66d672352c7a7
    render() {
        if(this.state.loggedIn==false){
            return <Redirect to="/candidate-login" />
            
        }
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={4}>
                            <CandidateHomeMenu />
                        </Col>
                        <Col md={8}>
                            <Fragment>
                                <div style={{ 'position': 'relative', 'overflowY': 'auto', 'height': '50vh', 'display': 'block' }}>
                                    <Table bordered>
                                        <thead style={{ 'backgroundColor': '#C1C8E4' }}>
                                            <tr>
                                                <th>Candidate Name</th>
                                                <th>Candidate Email</th>
<<<<<<< HEAD
                                                
                                                
                                                <th>Applied for Job</th>
                                                <th>Cv Status</th>
                                                
=======
                                                <th>Applied for Job</th>
                                                <th>Cv Status</th>
>>>>>>> 6b933da78a2880aecd8a3aa8d7a66d672352c7a7
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.applicants.map(
                                                    applicant =>
                                                    <tr key={applicant.email}>
                                                    <td>{applicant.candidateName}</td>
                                                    <td>{applicant.email}</td>
<<<<<<< HEAD
                                                   
                                                    <td>{applicant.appliedjob}</td>
                                                    <td>{applicant.result}</td>
                                                    
                                                           
=======
                    
                                                    <td>{applicant.appliedjob}</td>
                                                    <td>{applicant.result}</td>

>>>>>>> 6b933da78a2880aecd8a3aa8d7a66d672352c7a7
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

<<<<<<< HEAD
export default ReviewCv;
=======
export default Result;
>>>>>>> 6b933da78a2880aecd8a3aa8d7a66d672352c7a7
