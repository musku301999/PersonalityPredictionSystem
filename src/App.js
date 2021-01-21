import logo from './logo.svg';
// import './App.css';
import { Container, Row,Col} from 'reactstrap';
import Header from "./components/Header"
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




function App() {
  return (
    <div >
     
<Router><Container>
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
            
          </Col>
        </Row>
        <FooterComponent/>
      </Container></Router>
      

    </div>
  );
}

export default App;
