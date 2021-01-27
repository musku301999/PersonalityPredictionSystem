
import '../App.css'
import { Jumbotron, Container, Button, Row, Col } from "reactstrap"
import React, { Component } from 'react';
import AdminHomeMenu from './AdminHomeMenu';
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props){
    super(props);
    const token =localStorage.getItem("token1")
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