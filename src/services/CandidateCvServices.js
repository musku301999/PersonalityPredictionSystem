import axios from 'axios'

const BaseUrl="http://localhost:8080/candidateCv/create"

class CandidateCvServices{
    creatCv(cv){
        return axios.post(BaseUrl,cv);
    }



}
export default new CandidateCvServices();