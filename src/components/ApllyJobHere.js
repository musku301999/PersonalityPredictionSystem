import React, { Component, Fragment } from 'react';
import { Table, Button, Row, Container, Col } from 'reactstrap';
import JobService from '../services/JobService';
import AdminHomeMenu from '../components/AdminHomeMenu'
import CandidateHomeMenu from './CandidateHomeMenu';


class ApllyJobHere extends Component {
  constructor(props) {
      super(props)

      this.state = {
          jobs: []
      }

      // this.addJob = this.addJob.bind(this);
      // this.editJob = this.editJob.bind(this);
      // this.removeJob = this.removeJob.bind(this);
  }

  // removeJob(jobId) {

  //     JobService.deleteJob(jobId).then(res => {
  //         this.setState({ jobs: this.state.jobs.filter(job => job.jobId !== jobId) });
  //         alert("Job deleted successfully");
  //     });
  // }

  // editJob(id) {
  //     this.props.history.push(`/updatejob/${id}`);
  // }

  componentDidMount() {
      JobService.getJob().then(res => {
          this.setState({ jobs: res.data });
      });
  }

  // addJob() {
  //     this.props.history.push('/create-job');
  // }

  render() {
      console.log("Jobs : ", this.state.jobs)
      return (
          <div>
              <Container>
                  <Row>
                      <Col md={3}>
                          <CandidateHomeMenu />
                      </Col>

                      <Col md={9}>
                          <Fragment>
                              <div style={{ 'position': 'relative', 'overflowY': 'auto', 'height': '50vh', 'display': 'block' }}>
                              <h2 className='text-center'> Job Vacancies </h2>
                                    <Table bordered >
                                  
                                      {/* '#84CEEB, #5680E9, #54B9EA, #C1C8E4, #8860D0' */}
                                      <thead style={{ 'backgroundColor': '#C1C8E4' }}>
                                          <tr>
                                              <th>Job Description</th>
                                              <th>Req. Skills</th>
                                              <th>Experience</th>
                                              <th>Qualification</th>
                                              
                                          </tr>
                                      </thead>
                                      <tbody>
                                          {
                                              this.state.jobs.map(
                                                  job =>
                                                      <tr key={job.jobId}>
                                                          <td>{job.jobDes}</td>
                                                          <td>{job.reqSkills}</td>
                                                          <td>{job.experience}</td>
                                                          <td>{job.qualification}</td>
                                                         
                                                      </tr>
                                              )
                                          }
                                      </tbody>
                                  </Table>
                              </div>
                           

                          </Fragment>
                      </Col>
                  </Row>
              </Container>
          </div>



      );
  }
}
export default ApllyJobHere;