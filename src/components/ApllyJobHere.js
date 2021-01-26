import React from 'react'
import { Jumbotron, Card, CardBody, CardTitle, CardSubtitle, CardText, CardFooter, Button, Container, Row, Col } from "reactstrap"
import { ListGroup, ListGroupItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from "reactstrap";
import { useState } from 'react';
import CandidateHomeMenu from './CandidateHomeMenu';


const ApllyJobHere = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (

    <div>
      <Container>
        <Row>
          <Col md={4}>
            <CandidateHomeMenu />
          </Col>
          <Col md={8}>
            <Card>


              <ListGroup style={{ height: "100%" }}>

                <ListGroupItem tag="a" href="#!" action>
                  <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle carets color="Blue">
                      Search By
            </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Job details</DropdownItem>


                    </DropdownMenu>
                  </Dropdown>
                </ListGroupItem>

              </ListGroup>


              <Card className="text-left" style={{ width: "100%", backgroundColor: "", color: "whitesmoke", height: "100%" }}>
                <CardBody>
                  <h1 className="text-left my-2" style={{ color: 'black' }} >
                    Job Deatils

            </h1>
                  <Container className="text-center" >
                    <Button color="warning">Apply</Button>
                  </Container>
                </CardBody>
              </Card>
              <Card className="text-left" style={{ width: "100%", backgroundColor: "", color: "whitesmoke", height: "100%" }}>
                <CardBody>
                  <h1 className="text-left my-3" style={{ color: 'black' }} >
                    Job Deatils

            </h1>
                  <Container className="text-center" >
                    <Button color="warning">Apply</Button>
                  </Container>
                </CardBody>
              </Card>


              <Card className="text-left" style={{ width: "100%", backgroundColor: "", color: "whitesmoke", height: "100%" }}>
                <CardBody>
                  <h1 className="text-left my-3" style={{ color: 'black' }} >
                    Job Deatils

            </h1>
                  <Container className="text-center" >
                    <Button color="warning">Apply</Button>
                  </Container>
                </CardBody>
              </Card>





            </Card>
          </Col>
        </Row>
      </Container>
    </div>




  )
}

export default ApllyJobHere;


