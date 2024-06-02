import { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col, InputGroup } from "reactstrap";
import './SearchForm.css'


const SearchForm = ({search}) => {
  const INITIAL_STATE = {
    search: ''
  }

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(formData);
    search(formData);
    setFormData(INITIAL_STATE);
  }

  return (
    <Form className="SearchForm mb-3" onSubmit={handleSubmit}>
      {/* <Row className="row-cols-lg-auto align-items-center"> */}
      {/* <Row className="align-items-center">
        <Col sm={10}>
          <FormGroup>
            <Label htmlFor="search"></Label>
            <Input 
              id="search"
              type="text"
              name="search"
              placeholder="Enter search term.."
              value={formData.search}
              onChange={handleChange}
              className="p-2"
            />
          </FormGroup>
        </Col>

        <Col sm={2}>
          <Button className="p-2 bg-primary">Submit</Button>
        </Col>
      </Row> */}

      <InputGroup>
        <Label htmlFor="search"></Label>
        <Input 
          id="search"
          type="text"
          name="search"
          placeholder="Enter search term.."
          value={formData.search}
          onChange={handleChange}
          className="form-control form-control-lg"
        />
        <Button className="btn btn-lg bg-primary">Submit</Button>
      </InputGroup>
    </Form>
  )
};


export default SearchForm;