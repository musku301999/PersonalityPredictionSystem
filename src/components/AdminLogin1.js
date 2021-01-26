import React, { Component } from 'react';
import Adminservice from '../services/Adminservice'


class AdminLogin1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
               
                email: '',
                password: '',
                emailError:"",
                passError:""
            }
     
        this.changeCandidateEmailHandler= this.changeCandidateEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveCandidate = this.saveCandidate.bind(this);
    }     
    validate=() =>{
    
      let  emailError="";
      let passError="";
   
        if(this.state.email){
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if((this.state.email) != pattern){
                emailError='Enter Valid Email'
        }
    }
    if(!this.state.email){
        emailError="Email cannot be blank"
    }

    if(!this.state.password){
        passError="Password cannot be blank"
    }
    if(this.state.password.length > 8 ){
        passError="Enter 8 characters only"
    }


        if(emailError || passError){
            this.setState({emailError , passError});
            return false;
        }
        return true;
    }

    saveCandidate = (e)=>{
        e.preventDefault();
        let admin ={  email: this.state.email,
            password: this.state.password
        };
        console.log(JSON.stringify(admin));
        Adminservice.createAdmin(admin).then(res =>{console.log("success")
        this.props.history.push("/admin")
        })
    }  
        
    handleSubmit=event=>{
        event.preventDefault();
        const isvalid=this.validate();
        if(isvalid){
            console.log(this.state);

        }
    }
    cancel(){
        this.props.history.push('/admin');
    }

   
    changeCandidateEmailHandler = (event) =>{
        this.setState({email: event.target.value});
    }


    changePasswordHandler = (event) =>{
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <div>               
                <div className="container">
                    
                    <div className="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Admin Login</h3>
                            <div className = "card-body">
                                <form>
                                    
                                    <div className="form-group"> 
                                        <label>Email</label>
                                        <input placeholder="Enter Your Email" type="email" name="email"
                                            className="form-control" value = {this.state.email} 
                                            onChange = {this.changeCandidateEmailHandler}/>
                                             <div style={{color:"red"}}>{this.state.emailError}</div>
                                    </div>
                                
                                    <div className="form-group"> 
                                        <label>Password</label>
                                        <input placeholder="Create Password " type="password" name="password"
                                            className="form-control" value = {this.state.password} 
                                            onChange = {this.changePasswordHandler }/>
                             <div style={{color:"red"}}>{this.state.passError}</div>
                                    </div>
                                    <button className = "btn btn-success" onClick = {this.saveCandidate}>Submit</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} style = {{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}
export default AdminLogin1;