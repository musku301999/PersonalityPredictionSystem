import logo from './logo.svg';
// import './App.css';
import { Container, Row,Col} from 'reactstrap';
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
import CandidateLogin from './components/CandidateLogin'
import AdminLogin from './components/AdminLogin';
import About from './components/About';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return (
    <div >
     
<Router>
  <ToastContainer/>
  <Container>
      <HeaderComponent/>
        <Row>
          <Col md={4}>
         <CandidateHomeMenu/>  
          </Col>
          <Col md={8}>
            {/* <CandidateHomePage/> */}
            {/* <CreateCv/> */}
            {/* <ViewCv/> */}
           
           
           <Route path="/" component={CandidateHomePage} exact></Route>
            
          
            


            
            <Route path="/create-cv" component={CreateCv} exact></Route>
            <Route path="/view-cv" component={ViewCv} exact></Route>
            <Route path="/apply-job" component={ApllyJobHere} exact></Route>
            <Route path = "/updatecv/:email" component={UpdateCv}></Route>
            
          </Col>
        </Row>
        <FooterComponent/>
      </Container></Router>
      

    </div>
  );
}

export default App;
