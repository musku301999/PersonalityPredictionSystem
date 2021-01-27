import logo from './logo.svg';
// import './App.css';
import { Container, Row, Col } from 'reactstrap';
import CandidateHomeMenu from './components/CandidateHomeMenu';
import CandidateHomePage from './components/CandidateHomePage';
import CreateCv from './components/CreateCv';
import ViewCv from './components/ViewCv';
import UpdateCv from './components/UpdateCv'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ApllyJobHere from './components/ApllyJobHere';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import Signup from './components/Signup';
import AdminLogin1 from './components/AdminLogin1';
import About from './components/About';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import ReviewCv from './components/ReviewCv';
import JobList from './components/JobList';
import CreateJob from './components/CreateJob';
import UpdateJob from './components/UpdateJob';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {

  return (
    <div>
      <Router>
        <Container>
          <HeaderComponent />
          <Route path="/" component={About} exact></Route>
          <Route path="/admin-login" component={AdminLogin1} exact></Route>
          <Route path="/candidate-login" component={Login} exact></Route>
          <Route path="/candidate-register" component={Signup} exact></Route>
          <Route path="/home" component={CandidateHomePage} exact></Route>
          <Route path="/create-cv" component={CreateCv} exact></Route>
          <Route path="/view-cv" component={ViewCv} exact></Route>
          <Route path="/apply-job" component={ApllyJobHere} exact></Route>
          <Route path="/admin" component={Home} exact></Route>
          <Route path="/cv" component={ReviewCv} exact></Route>
          <Route path="/job" component={JobList} exact></Route>
          <Route path="/create-job" component={CreateJob} exact></Route>
          <Route path="/updatejob/:id" component={UpdateJob} exact></Route>
          <Route path="/updatecv/:email" component={UpdateCv} exact></Route>
          <Route path="/logout" component={Logout} exact></Route>


          <FooterComponent />

        </Container>
      </Router>
    </div>






  );
}

export default App;
