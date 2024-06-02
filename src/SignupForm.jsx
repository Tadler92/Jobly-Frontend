
import { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col, InputGroup } from "reactstrap";
import { Navigate, useNavigate } from "react-router-dom";
import './SignupForm.css'


const SignupForm = ({signup}) => {
  const navigate = useNavigate();

  const INITIAL_STATE = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
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
    console.log('SignupForm formdata', formData);
    signup(formData);
    setFormData(INITIAL_STATE);
    navigate('/');
  }

  return (
    <div className="SignupForm">
      <h1>Signup</h1>
      <Form className="SignupForm-form mb-3" onSubmit={handleSubmit}>

        <InputGroup className="SignupForm-label">
          <Label htmlFor="username" className="text-start" sm={12}>Username</Label>
          <Input 
            id="username"
            type="text"
            name="username"
            placeholder="Enter username..."
            autoComplete="username"
            value={formData.username}
            onChange={handleChange}
            className="form-control form-control-md"
            required
          />
        </InputGroup>
        
        <InputGroup className="SignupForm-label">
          <Label htmlFor="password" className="text-start" sm={12}>
            Password
          </Label>
          <Input 
            id="password"
            type="password"
            name="password"
            placeholder="Enter password..."
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            className="form-control form-control-md mb-3"
            required
          />
        </InputGroup>

        <InputGroup className="SignupForm-label">
          <Label htmlFor="firstName" className="text-start" sm={12}>
            First Name
          </Label>
          <Input 
            id="firstName"
            type="text"
            name="firstName"
            placeholder="Enter First Name..."
            value={formData.firstName}
            onChange={handleChange}
            className="form-control form-control-md mb-3"
            required
          />
        </InputGroup>

        <InputGroup className="SignupForm-label">
          <Label htmlFor="lastName" className="text-start" sm={12}>
            Last Name
          </Label>
          <Input 
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Enter Last Name..."
            value={formData.lastName}
            onChange={handleChange}
            className="form-control form-control-md mb-3"
            required
          />
        </InputGroup>

        <InputGroup className="SignupForm-label">
          <Label htmlFor="email" className="text-start" sm={12}>
            Email
          </Label>
          <Input 
            id="email"
            type="email"
            name="email"
            placeholder="Enter email..."
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control form-control-md mb-3"
            required
          />
        </InputGroup>

        <Button className="btn btn-md bg-primary px-5">Submit</Button>
      </Form>
    </div>
  )
};

// const SignupForm = () => {
//   return (
//     <div>
//       <h1>Signup</h1>
//       <p>Form to signup to the Jobly site!</p>
//     </div>
//   );
// };


export default SignupForm;