
import '../App.css'
import {Jumbotron, Container, Button ,Row,Col} from "reactstrap"
import React, { Component } from 'react';
import AdminHomeMenu from './AdminHomeMenu';

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={4}>
              <AdminHomeMenu/>
            </Col>
            <Col md={8}>
            <div>
        <Jumbotron>
        <h1>
          Welcome Admin
        </h1>
  
      
        </Jumbotron>
  
        </div>
            </Col>
          </Row>
        </Container>
         

      </div>
    );
  }
}


export default Home;