import React from 'react'
import { Jumbotron } from 'reactstrap'
import CandidateHomeMenu from '../components/CandidateHomeMenu'
import { Container, Row, Col } from 'reactstrap';

function CandidateHomePage (){
    return( 
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

    )
}
export default CandidateHomePage