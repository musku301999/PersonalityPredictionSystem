import React, { Component } from 'react';
import { toast,ToastContainer } from 'react-toastify';
import Adminservice from '../services/Adminservice'
import web1 from '../images/background1.svg';
import web2 from '../images/background2.svg';

class AdminLogin1 extends Component {
    constructor(props) {
        super(props);
        let loggedIn=false
        this.state = {

            email: '',
            password: '',
            emailError: "",
            passError: "",
            loggedIn
        }

        this.changeCandidateEmailHandler = this.changeCandidateEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveCandidate = this.saveCandidate.bind(this);
    }
    validate = () => {

        let emailError = "";
        let passError = "";

        if (!this.state.password) {
            passError = "Password cannot be blank";
          }
          if (!this.state.email) {
            emailError = "Email cannot be blank";
          }

        if (emailError || passError) {
            this.setState({ emailError, passError });
            return false;
        }
        return true;
    }

    saveCandidate = (e) => {
        const isValid = this.validate();
        e.preventDefault();
        let admin = {
            email: this.state.email,
            password: this.state.password
        };
        if(isValid){
        console.log(JSON.stringify(admin));
        Adminservice.createAdmin(admin).then(res => {
            localStorage.setItem("token1","abc")
        
            this.setState({loggedIn:true});
            console.log("success")
            this.props.history.push("/admin")
        },error=>{
            toast.error("Invalid Email or Password")
        })
    }
    }

    handleSubmit = event => {
        event.preventDefault();
        const isvalid = this.validate();
        if (isvalid) {
            console.log(this.state);

        }
    }
    cancel() {
        this.props.history.push('/admin');
    }


    changeCandidateEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }


    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <div>
                <div className="container">

                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Admin Login</h3>
                            <div className="card-body">
                                <form>

                                    <div className="form-group">
                                        <label>Email</label>
                                        <input placeholder="Enter Your Email" type="email" name="email"
                                            className="form-control" value={this.state.email}
                                            onChange={this.changeCandidateEmailHandler} />
                                        <div style={{ color: "red" }}>{this.state.emailError}</div>
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input placeholder="Create Password " type="password" name="password"
                                            className="form-control" value={this.state.password}
                                            onChange={this.changePasswordHandler} />
                                        <div style={{ color: "red" }}>{this.state.passError}</div>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveCandidate}>Submit</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                    <div>
                                        <a href="/" style={{marginLeft:"350px"}}>Back to home</a>
                                    </div>
                                    <ToastContainer />
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