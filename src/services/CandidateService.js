import axios from 'axios';

const CANDIDATE_API_BASE_URL = "http://localhost:8080/candidate/create";

class CandidateService {
  
    save(candidate){
        return axios.post(CANDIDATE_API_BASE_URL,candidate);
    }
    candLogin(candidate){
        return axios.post("http://localhost:8080/candidateReg/login",candidate)
    }
}

//exporting EmployeeService object
export default new CandidateService()