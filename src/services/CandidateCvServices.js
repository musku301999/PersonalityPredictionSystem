import axios from 'axios'

const BaseUrl="http://localhost:8082/candidateCv/create"

class CandidateCvServices{
    creatCv(cv){
        return axios.post(BaseUrl,cv);
    }
    getCv() {
        return axios.get("http://localhost:8082/candidateCv/getAllCandidate");
    }
    getCvById(id) {
        return axios.get("http://localhost:8082/candidateCv/admin/getById/" + id);
    }
    getCvByEmail(email) {
        return axios.get("http://localhost:8082/candidateCv/get/"+ email);
    }

    updateCv(cv, email) {
        return axios.put("http://localhost:8082/candidateCv/update/"+ email, cv);
    }

    deleteCv(email) {
        return axios.delete("http://localhost:8082/candidateCv/delete/" + email);
    }




}
export default new CandidateCvServices();