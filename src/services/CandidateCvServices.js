import axios from 'axios'

const BaseUrl="http://localhost:8080/candidateCv/create"

class CandidateCvServices{
    creatCv(cv){
        return axios.post(BaseUrl,cv);
    }
    getCv() {
        return axios.get("http://localhost:8080/candidateCv/getAllCandidate");
    }
    getCvById(id) {
        return axios.get("http://localhost:8080/candidateCv/admin/getById/" + id);
    }
    getCvByEmail(email) {
        return axios.get("http://localhost:8080/candidateCv/get/"+ email);
    }

    updateCv(cv, email) {
        return axios.put("http://localhost:8080/candidateCv/update/"+ email, cv);
    }

    deleteCv(email) {
        return axios.delete("http://localhost:8080/candidateCv/delete/" + email);
    }
register(cand){
    return axios.post("http://localhost:8080/candidateReg/create",cand)
}



}
export default new CandidateCvServices();