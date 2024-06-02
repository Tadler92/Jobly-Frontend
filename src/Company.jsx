import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import './Company.css'


const Company = () => {
  const {company} = useParams();
  const [thisCompany, setThisCompany] = useState('');
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getCompany() {
      let comp = await JoblyApi.getCompany(company);
      setThisCompany(comp)
      setJobs(comp.jobs)
    }
    getCompany();
  }, [company]);

  console.log('This company', thisCompany)

  return (
    <div className="Company">
      <h1>{thisCompany.name}</h1>
      <img src={thisCompany.logoUrl} alt={`${thisCompany.name}'s logo`} />
      <p>{thisCompany.description}</p>
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


export default Company;