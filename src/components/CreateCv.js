import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import baseUrl from '../services/BootApi'

function CreateCv(){

  useEffect(()=>{
    document.title="Create Cv"
  },[])

  const [cv,setCv]=useState({})
//form handle function
const handleForm=(e)=>{
  console.log(cv);
  PostData(cv);
  e.preventDefault();
}
//creating function to post data on server
function PostData(data){
axios.post(`${baseUrl}/candidateCv/create`,data).then(
  (response)=>{
    console.log(response);
    console.log("success");
  },(error)=>{
console.log(error);
console.log("error");
  }
)
}

    return(
        <div>
            <div style={{textAlign:"center",fontFamily:"monospace"}}>
            <h1> Create Your Cv </h1>
            </div>
            
            <Form onSubmit={handleForm}>
      <FormGroup>
      <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="Enter your Full Name" onChange={(e)=>{
          setCv({...cv,name:e.target.value})
        }} />
</FormGroup>
<FormGroup>
        <Label for="email">Email</Label>
        <Input type="text" name="email" id="email" placeholder="Enter your Email" onChange={(e)=>{
          setCv({...cv,email:e.target.value})
        }} />
      </FormGroup>
      <FormGroup>
        <Label for="number">Phone Number</Label>
        <Input type="text" name="number" id="number" placeholder="Enter your Phone number" onChange={(e)=>{
          setCv({...cv,number:e.target.value})
        }} />
      </FormGroup>
      
<FormGroup>
      <Label for="qual">Qualification</Label>
        <Input type="text" name="qual" id="qual" placeholder="Enter your Qualification" onChange={(e)=>{
          setCv({...cv,qual:e.target.value})
        }} />
</FormGroup>
<FormGroup>
      <Label for="exp">Experience</Label>
        <Input type="text" name="exp" id="exp" placeholder="Enter your experience" onChange={(e)=>{
          setCv({...cv,exp:e.target.value})
        }}/>
</FormGroup>
       
      <FormGroup>
        <Label for="skill">Skills</Label>
        <Input type="text" name="text" id="exampleText" placeholder= "Enter your technical skills" onChange={(e)=>{
          setCv({...cv,skill:e.target.value})
        }}/>
      </FormGroup>
     
     
      <Button type="submit" color="primary">Submit</Button>
      <Button type="reset" color="warning">Clear</Button>
    </Form>
        </div>

    )
}
export default CreateCv