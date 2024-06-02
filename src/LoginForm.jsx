import { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col, InputGroup } from "reactstrap";
import { Navigate, useNavigate } from "react-router-dom";
import './LoginForm.css'


const LoginForm = ({login}) => {
  const navigate = useNavigate();

  const INITIAL_STATE = {
    username: '',
    password: ''
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
    login(formData);
    setFormData(INITIAL_STATE);
    navigate('/');
  }

  return (
    <div className="LoginForm">
      <h1>Login</h1>
      <Form className="LoginForm-form mb-3" onSubmit={handleSubmit}>

        <InputGroup className="LoginForm-label">
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
        
        <InputGroup className="LoginForm-label">
          <Label htmlFor="search" className="text-start" sm={12}>Password</Label>
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

        <Button className="btn btn-md bg-primary px-5">Submit</Button>
      </Form>
    </div>
  )
};

// const LoginForm = () => {
//   return (
//     <div>
//       <h1>Login</h1>
//       <p>Form to login to the Jobly site!</p>
//     </div>
//   );
// };


export default LoginForm;