import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import './JobCard.css'
import JoblyApi from "./api";
import CurrUserContext from "./CurrUserContext";
import { useContext, useState, useEffect } from "react";


const JobCard = ({title, companyName, salary, equity, id}) => {
  const {currentUser, applications, setApplications} = useContext(CurrUserContext);
  const [hasApplied, setHasApplied] = useState(false);

  useEffect(() => {
    function disableButtons () {
      if (applications.includes(id)) setHasApplied(true);
    }
    disableButtons();
  }, [id])

  async function apply() {
    console.log('job card applications', applications)
    const applied = await JoblyApi.applyToJob(currentUser.user.username, id);

    console.log('applied info in JobCard', applied);
    setApplications([...applications, id]);
    console.log('JobCard applications', applications);
    setHasApplied(true);
  }

  return (
    // <div className="CompanyCard">
      // <Link className="CompanyCard card p-0" to={`/companies`}>
        <Card className="JobCard card-body text-start">
          <CardBody>
            <CardTitle className="card-title" tag='h6'>{title}</CardTitle>
            <CardText>{companyName}</CardText>
            <div>
              <small>Salary: {salary || 0}</small>
            </div>
            <div>
              <small>Equity: {equity || 0}</small>
            </div>
          </CardBody>
          {hasApplied ? 
            <Button 
              className="btn btn-danger" 
              disabled={hasApplied}
            >
              Applied
            </Button> :
            <Button 
              className="btn btn-danger" 
              onClick={apply}
            >
              Apply
            </Button>
          }
          {/* <Button 
            className="btn btn-danger" 
            onClick={apply}
            disabled={hasApplied}
          >Apply</Button> */}
        </Card>
      // </Link>
    // </div>
  )
};


export default JobCard;