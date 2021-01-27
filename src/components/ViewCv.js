import React, { Component, Fragment } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import CandidateCvServices from '../services/CandidateCvServices';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Table,
    CardFooter,
    Jumbotron,
    Button,
    Container,
    Row,
    Col
} from "reactstrap";
import FooterComponent from './FooterComponent';
import CandidateHomeMenu from './CandidateHomeMenu';
class ViewCv extends Component {
    constructor(props) {
        super(props)
        this.state = {
            candidates: []
        }
        this.editcv = this.editcv.bind(this);
        this.deletecv = this.deletecv.bind(this);
    }

    deletecv(email) {
        CandidateCvServices.deleteCv(email).then(res => {
            this.setState({ candidates: this.state.candidates.filter(cv => cv.email !== email) });
            toast.success("Cv deleted succesfully.")
           
        });

    }
    editcv(email) {
        this.props.history.push(`/updatecv/${email}`);

    }

    componentDidMount() {
        CandidateCvServices.getCv().then(res => {
            this.setState({ candidates: res.data });
        });
    }
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={4}>
                            <CandidateHomeMenu />
                        </Col>
                        <Col md={8}>
                            <Fragment>
                                <div style={{ 'position': 'relative', 'overflow-y': 'auto', 'height': '50vh', 'display': 'block' }}>
                                    <Table bordered >
                                        {/* '#84CEEB, #5680E9, #54B9EA, #C1C8E4, #8860D0' */}
                                        <thead style={{ 'backgroundColor': '#C1C8E4' }}>

                                            <tr>
                                                <th> Candidate name </th>
                                                <th>  Email </th>
                                                <th> Phoneno </th>
                                                <th> Qualification </th>
                                                <th> Experience </th>
                                                <th> Skill </th>
                                                <th>Applied Job For</th>
                                                <th> Actions</th>
                                            </tr>

                                        </thead>
                                        <tbody>
                                            {
                                                this.state.candidates.map(
                                                    cv =>
                                                        <tr key={cv.email}>
                                                            <td>{cv.candidateName}</td>
                                                            <td>{cv.email}</td>
                                                            <td> {cv.phoneNo}</td>
                                                            <td> {cv.qualification}</td>
                                                            <td> {cv.experience}</td>
                                                            <td> {cv.skill}</td>
                                                            <td>{cv.appliedjob}</td>
                                                            <td>
                                                                <Button color="info mb-1" size="sm" onClick={() => this.editcv(cv.email)} outline  >Update</Button>
                                                                <Button color="danger ml-1" size="sm" onClick={() => this.deletecv(cv.email)} outline  >Delete</Button>

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

export default ViewCv;