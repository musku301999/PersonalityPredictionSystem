import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import CandidateService from '../services/CandidateService'
import CandidateHomePage from './CandidateHomePage';

class Login extends Component {
    constructor(props) {
        super(props);
        let loggedIn=false;
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

        
        if (!this.state.email) {
            emailError = "Email cannot be blank"
        }

        if (!this.state.password) {
            passError = "Password cannot be blank"
        }
        if (this.state.password.length > 8) {
            passError = "Enter 8 characters only"
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
        let candidate = {
            email: this.state.email,
            password: this.state.password
        };
        if (isValid) {
            console.log(JSON.stringify(candidate));
            CandidateService.candLogin(candidate).then(res => {
                localStorage.setItem("token", "abc")
                this.setState({ loggedIn: true });
               
                this.props.history.push('/home')
            }, error => {
                toast.error("Check Your Email and Password ")
                // this.cancel();
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
                            <h3 className="text-center">Candidate Login</h3>
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
                                        <a href="/candidate-register">Not a user? Click here</a>

                                        <a href="/" style={{ marginLeft: "230px" }}>Back to home</a>
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
export default Login;