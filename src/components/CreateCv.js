
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import baseUrl from '../services/BootApi' 

import React, { Component } from 'react';
import CandidateCvServices from '../services/CandidateCvServices';

class CreateCv extends Component {
  constructor(props) {
    super(props)
    this.state={
      name:'',
      email:'',
      number:'',
      qual:'',
      exp:'',
      skill:''


    }
   
    this.nameChangeHandler=this.nameChangeHandler.bind(this);
    this.emailChangeHandler=this.emailChangeHandler.bind(this);
    this.numberChangeHandler=this.numberChangeHandler.bind(this);
    this.qualChangeHandler=this.qualChangeHandler.bind(this);
    this.expChangeHandler=this.expChangeHandler.bind(this);
    this.skillChangeHandler=this.skillChangeHandler.bind(this);
    this.save=this.save.bind(this)
    
  }

  cancel = () => { 
    this.setState({
      name:'',
      email:'',
      number:'',
      qual:'',
      exp:'',
      skill:''
     
    });
  }
  
  
save=(e)=>{
  e.preventDefault();
  let cv={candidateName:this.state.name,email:this.state.email,phoneNo:this.state.number,experience:this.state.exp,
    qualification:this.state.qual,skill:this.state.skill}
    console.log("cv=>" + JSON.stringify(cv));
    CandidateCvServices.creatCv(cv).then(res=>{
      console.log("success") 
      this.cancel();
       
      
    },error=>{
      console.log("You cannot create Cv with same email")
    })
  
}

  nameChangeHandler(event){
    this.setState({ name: event.target.value });

  }
  emailChangeHandler(event){
    this.setState({ email: event.target.value });
  }
  numberChangeHandler(event){
    this.setState({ number: event.target.value });
  }
  qualChangeHandler(event){
    this.setState({ qual: event.target.value });
  }
  expChangeHandler(event){
    this.setState({ exp: event.target.value });
  }
  skillChangeHandler(event){
    this.setState({ skill: event.target.value });
  }
  

  render() {
    return (
      <div>
        <div>
            <div style={{textAlign:"center",fontFamily:"monospace"}}>
            <h1> Create Your Cv </h1>
            </div>
            
            <Form id="form">
      <FormGroup>
      <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="Enter your Full Name" 
        value={this.state.name} onChange={this.nameChangeHandler} />
</FormGroup>
<FormGroup>
        <Label for="email">Email</Label>
        <Input type="text" name="email" id="email" placeholder="Enter your Email" 
        value={this.state.email} onChange={this.emailChangeHandler} />
      </FormGroup>
      <FormGroup>
        <Label for="number">Phone Number</Label>
        <Input type="text" name="number" id="number" placeholder="Enter your Phone number" 
        value={this.state.number} onChange={this.numberChangeHandler}  />
      </FormGroup>
      
<FormGroup>
      <Label for="qual">Qualification</Label>
        <Input type="text" name="qual" id="qual" placeholder="Enter your Qualification" 
        value={this.state.qual} onChange={this.qualChangeHandler} />
</FormGroup>
<FormGroup>
      <Label for="exp">Experience</Label>
        <Input type="text" name="exp" id="exp" placeholder="Enter your experience"
        value={this.state.exp} onChange={this.expChangeHandler} />
</FormGroup>
       
      <FormGroup>
        <Label for="skill">Skills</Label>
        <Input type="text" name="text" id="exampleText" placeholder= "Enter your technical skills"
        value={this.state.skill} onChange={this.skillChangeHandler} />
      </FormGroup>
     
     
      <Button type="submit" color="primary" onClick={this.save}>Submit</Button>
      <Button type="reset" color="warning" onClick={this.cancel} style={{marginLeft:"200px"}}>Clear</Button>
    </Form>
        </div>
        
      </div>
    );
  }
}

export default CreateCv;



  
 