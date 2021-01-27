import axios from 'axios';

const CV_BASE_URL = "http://localhost:8082/candidateCv/admin/getAllCandidate";

class CvService {

    getCv() {
        return axios.get(CV_BASE_URL);
    }

    getCvById(id) {
        return axios.get("http://localhost:8082/candidateCv/admin/getById/" + id);
    }

}

export default new CvService();