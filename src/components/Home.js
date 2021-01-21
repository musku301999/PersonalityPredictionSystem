import React from 'react'
import '../App.css'
import {Jumbotron, Container, Button} from "reactstrap"
const Home=()=>{
    return(
        <div>
        <Jumbotron className="text-right bg-info ">
        <Container>
  
      <img className="text-left" src="logo/job.jpg"  rounded />
        <h1 className="font-weight-bold" tag="h1">Personality Prediction System</h1>
     </Container>
        </Jumbotron>
  
        </div>

    )
}
export default Home;