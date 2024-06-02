import { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";
import './Companies.css'

const Companies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      let companies = await JoblyApi.getCompanies({});
      setCompanies(companies);
      setIsLoading(false);
    }

    getCompanies();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>
  }

  async function search(company) {
    let comps = await JoblyApi.getCompanies(company);
    setCompanies(comps);
  }

  // console.log('companies in Companies', companies);

  return (
    <div className="Companies">
      <SearchForm search={search} />
      <h1 className="text-white">Companies</h1>
      <p className="text-white">The list of companies on the Jobly site!</p>
      {companies.map(company => (
        <CompanyCard 
          key={company.handle}
          handle={company.handle}
          name={company.name}
          description={company.description}
        />
      ))}
    </div>
  );
};


export default Companies;