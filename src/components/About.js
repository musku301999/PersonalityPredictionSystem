
import {
   
    Button,
    Container,
    Row,
    Col
} from "reactstrap";

import React, { Component } from 'react';
import Login from './Login';
import web1 from '../images/background1.svg';
import web2 from '../images/background2.svg';


class About extends Component {
    constructor(props) {
        super(props)
        this.admin = this.admin.bind(this);
        this.candidate = this.candidate.bind(this)
       
    }
    admin() {
        this.props.history.push('/admin-login')
    }
    candidate() {
        this.props.history.push('/candidate-login')
    }

    render() {
        
         return (
            
            <div className="text-center" style={{ width: '100%', height: "100%" }}>
                <Row>
                    <Col md={5}><img src={web1} width='400vw'></img>
                        <Container className="text-center mt-5">
                            <Button color="danger mr-5" size="lg" outline onClick={this.admin} >Admin</Button>
                            <Button color="danger ml-5" size="lg" outline onClick={this.candidate}>Candidate</Button>
                        </Container>
                    </Col>
                    <Col>
                        <div>
                            <h4>To get a job easily</h4><h2><strong><i>Now joining us.</i></strong></h2>
                                <small><i>This platform will help you to find a suitable job according to your profile.
                                Create your Cv and apply for the job of your wish. Your Cv will be directly sent to the HR.
                                Then you will be notified if you are selected or not.</i></small>
                                <h4 className='mt-3'>All the best!</h4>
                    </div>
                        <img src={web2} width='380vw'></img>
                    </Col>
                </Row>
                
            </div>
        );}
        
        
       
    
}

export default About;
