import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function CreateCv(){
    return(
        <div>
            <div style={{textAlign:"center",fontFamily:"monospace"}}>
            <h1> Create Your Cv </h1>
            </div>
            
            <Form>
      <FormGroup>
      <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="Enter your Full Name" />
</FormGroup>
<FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Enter your Email" />
      </FormGroup>
      <FormGroup>
        <Label for="number">Phone Number</Label>
        <Input type="number" name="number" id="number" placeholder="Enter your Phone number" />
      </FormGroup>
      
<FormGroup>
      <Label for="qual">Qualification</Label>
        <Input type="text" name="qual" id="qual" placeholder="Enter your Qualification" />
</FormGroup>
<FormGroup>
      <Label for="exp">Experience</Label>
        <Input type="text" name="exp" id="exp" placeholder="Enter your experience" />
</FormGroup>
       
      <FormGroup>
        <Label for="skill">Skills</Label>
        <Input type="textarea" name="text" id="exampleText" placeholder= "Enter your technical skills"/>
      </FormGroup>
     
     
      <Button type="submit" color="primary">Submit</Button>
    </Form>
        </div>

    )
}
export default CreateCv