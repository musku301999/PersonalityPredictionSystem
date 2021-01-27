import axios from 'axios';

const JOB_BASE_URL = 'http://localhost:8082/job/getAllJob';

class JobService {

    getJob() {
        return axios.get(JOB_BASE_URL);
    }

    createJob(job) {
        return axios.post("http://localhost:8082/job/admin/add", job);
    }

    getJobById(id) {
        return axios.get("http://localhost:8082/job/admin/get/" + id);
    }

    updateJob(job, id) {
        return axios.put("http://localhost:8082/job/update/" + id, job);
    }

    deleteJob(id) {
        return axios.delete("http://localhost:8082/job/admin/delete/" + id);
    }

}

export default new JobService();        // while exporting we'll simply pass new object of the class