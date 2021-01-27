import axios from 'axios';

class AppliedJobService {

    getAppliedJob() {
        return axios.get("http://localhost:8082/appliedJob/getall");
    }
    getCv() {
        return axios.get("http://localhost:8082/candidateCv/getAllCandidate");
    }

    getAppliedJobById(id) {
        return axios.get("http://localhost:8082/appliedJob/get/" + id);
    }
}

export default new AppliedJobService();