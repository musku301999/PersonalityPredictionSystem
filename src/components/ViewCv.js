import React from "react";

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Jumbotron,
    Button,
    Container,
} from "reactstrap";

const ViewCv=()=>{
    return(
        <div className="text-center" style={{alignContent:"center"}}>
        <Card className="text-center mb-1">
        <CardBody className="text-left" style={{ width: '18rem', backgroundColor: '#d9d9d9' }}>
        <CardSubtitle className="text-center"  tag="h3">My Cv</CardSubtitle>
        <hr/>
        <CardText class="font-weight-normal">Name: Kamna Yadav</CardText>
        <CardText class="font-weight-normal">Email: ikamna@gmail.com</CardText>
        <CardText class="font-weight-normal">Ph no: 7045829359</CardText>
        <CardText class="font-weight-normal">Skills: Java</CardText>
        <CardText class="font-weight-normal">Job Applied for: Java Developer</CardText>
        <Container className="text-center">
        <Button color="warning ml-3">Update</Button>
        <Button color="danger ml-3">Delete</Button>
        </Container>
        
        </CardBody>
        </Card>
        </div>
    );
};
export default ViewCv;