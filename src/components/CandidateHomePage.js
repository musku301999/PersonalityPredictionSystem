
import { Jumbotron } from 'reactstrap'
import CandidateHomeMenu from '../components/CandidateHomeMenu'
import { Container, Row, Col } from 'reactstrap';

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class CandidateHomePage extends Component {
    constructor(props){
        super(props)
        const token =localStorage.getItem("token")
    let loggedIn=true;
    if(token==null){
        loggedIn=false;
    }
    this.state={
        loggedIn
    }
        }
    render() {
        if(this.state.loggedIn==false){
            return <Redirect to="/candidate-login" />
        }
        return (
            <div>
                <Container><Row> <Col md={4}>
                <CandidateHomeMenu />
            </Col>
                <Col md={8} id="column">
                    <Jumbotron>
                        <h1>Welcome User</h1>
                        <h2>You are just one step away in building your career.</h2>
                        <h3>Click on Cv to Create your Cv and Start Applying for Jobs.</h3>
                    </Jumbotron>
                </Col></Row></Container>

            </div>
        );
    }
}

export default CandidateHomePage;
