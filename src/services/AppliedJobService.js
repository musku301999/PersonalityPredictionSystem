import axios from 'axios';

class AppliedJobService {

    getAppliedJob() {
        return axios.get("http://localhost:8080/appliedJob/getall");
    }

    getAppliedJobById(id){
        return axios.get("http://localhost:8080/appliedJob/get/" + id);
    }
}

export default new AppliedJobService();