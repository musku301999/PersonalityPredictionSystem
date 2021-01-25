import logo from './logo.svg';
// import './App.css';
import { Container, Row, Col } from 'reactstrap';
import CandidateHomeMenu from './components/CandidateHomeMenu';
import CandidateHomePage from './components/CandidateHomePage';
import CreateCv from './components/CreateCv';
import ViewCv from './components/ViewCv';
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
import CandidateLogin from './components/CandidateLogin'
import AdminLogin from './components/AdminLogin';
import About from './components/About';
import { ToastContainer, toast } from 'react-toastify';
import CandidateModule from './components/CandidateModule';

function App() {
  
  return (
    <div >
<Router>
<Container>
<HeaderComponent/>
<Route path="/" component={About} exact></Route>
<Route path="/admin-login" component={AdminLogin} exact></Route>
<Route path="/candidate-login" component={CandidateLogin} exact></Route>
<Route path="/candidate-register" component={Signup} exact></Route>
<Route path="/home" component={CandidateHomePage} exact></Route>
<Route path="/create-cv" component={CreateCv} exact></Route>
<Route path="/view-cv" component={ViewCv} exact></Route>
<FooterComponent/>

</Container>
</Router>

        
    </div>
  );
}

export default App;
