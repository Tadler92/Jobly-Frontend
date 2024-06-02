import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import JobCard from "./JobCard";
import JoblyApi from "./api";
import './Jobs.css'


const Jobs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getJobs() {
      let jobs = await JoblyApi.getJobs({});
      // console.log('jobs in Jobs useEffect', jobs)
      setJobs(jobs);
      setIsLoading(false);
    }

    getJobs();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>
  }

  async function search(job) {
    let jobs = await JoblyApi.getJobs(job);
    setJobs(jobs);
  }

  // console.log('jobs in jobs', jobs);

  return (
    <div className="Jobs">
      <SearchForm search={search} />
      <h1 className="text-white">Jobs</h1>
      <p className="text-white">A list of Jobs on the Jobly site!</p>
      {jobs.map(job => (
        <JobCard 
          key={job.id}
          id={job.id}
          companyName={job.companyName}
          title={job.title}
          salary={job.salary}
          equity={job.equity}
        />
      ))}
    </div>
  );
};


export default Jobs;