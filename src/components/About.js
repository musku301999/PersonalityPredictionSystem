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



const About=()=>{
    return(
        <div className="text-center" style={{ width: '100%',height:"100%" }}>
        <Jumbotron>
        <span class="border border-primary">
        <Card className="text-center mb-1" style={{ width: '100%',height:"100%" }}>
        <CardBody className="text-center" >
        <CardSubtitle className="font-weight-bold" tag="h3">About us</CardSubtitle>
        <hr/>
        <CardText className="font-italic " tag="h5">Get a job easily now joining us. </CardText>
        <CardText className="font-italic" tag="h5">This platform will help you to find a suitable job according to your profile.</CardText>
        <CardText className="font-italic" tag="h5">
        Create your Cv and apply for the job you wish.Your Cv will be directly sent to the HR.
        </CardText><CardText className="font-italic" tag="h5">Then you will be notified if you are selected or not.</CardText>
        <CardText className="font-italic" tag="h4">All the best!</CardText>
        
        </CardBody>
        
        </Card>
        <CardFooter className="text-muted">
        <Container className="text-center">
        
        <Button color="danger mr-5" size="lg" outline >Admin</Button>
        <Button color="danger ml-5" size="lg" outline>Candidate</Button>
        </Container>
        </CardFooter>
        </span>
        </Jumbotron>
        </div>
    );

};

export default About; 