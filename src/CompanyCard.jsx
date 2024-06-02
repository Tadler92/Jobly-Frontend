import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import './CompanyCard.css'


const CompanyCard = ({handle, name, description}) => {
  return (
    // <div className="CompanyCard">
      <Link className="CompanyCard card p-0" to={`/companies/${handle}`}>
        <Card className="card-body text-start">
          <CardBody>
            <CardTitle className="card-title" tag='h6'>{name}</CardTitle>
            <CardText>
              <small>{description}</small>
            </CardText>
          </CardBody>
        </Card>
      </Link>
    // </div>
  )
};


export default CompanyCard;