
import { useState, useContext } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col, InputGroup } from "reactstrap";
import { Navigate, useNavigate } from "react-router-dom";
import JoblyApi from "./api";
import CurrUserContext from "./CurrUserContext";
import './EditProfile.css'


const EditProfile = () => {
  const navigate = useNavigate();
  const {currentUser, setCurrentUser} = useContext(CurrUserContext);
  const user = currentUser.user;
  // console.log('user info in EditProfile', user);

  const INITIAL_STATE = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
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

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log('SignupForm formdata', formData);
    let updatedInfo = await JoblyApi.updateUserProfile(user.username, formData);

    setCurrentUser(updatedInfo);
    setFormData(INITIAL_STATE);
    navigate('/');
  }

  return (
    <div className="EditProfile">
      <h1>Edit Profile</h1>
      <Form className="EditProfile-form mb-3" onSubmit={handleSubmit}>

        {/* <InputGroup className="SignupForm-label">
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
        </InputGroup> */}

        <InputGroup className="EditProfile-label">
          <Label htmlFor="firstName" className="text-start" sm={12}>
            First Name
          </Label>
          <Input 
            id="firstName"
            type="text"
            name="firstName"
            placeholder="Enter new First Name..."
            value={formData.firstName}
            onChange={handleChange}
            className="form-control form-control-md mb-3"
            required
          />
        </InputGroup>

        <InputGroup className="EditProfile-label">
          <Label htmlFor="lastName" className="text-start" sm={12}>
            Last Name
          </Label>
          <Input 
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Enter new Last Name..."
            value={formData.lastName}
            onChange={handleChange}
            className="form-control form-control-md mb-3"
            required
          />
        </InputGroup>

        <InputGroup className="EditProfile-label">
          <Label htmlFor="email" className="text-start" sm={12}>
            Email
          </Label>
          <Input 
            id="email"
            type="email"
            name="email"
            placeholder="Enter new email..."
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control form-control-md mb-3"
            required
          />
        </InputGroup>

        <InputGroup className="EditProfile-label">
          <Label htmlFor="password" className="text-start" sm={12}>
            Password
          </Label>
          <Input 
            id="password"
            type="password"
            name="password"
            placeholder="Enter password to confirm profile"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            className="form-control form-control-md mb-3"
            required
          />
        </InputGroup>

        <Button className="btn btn-md bg-primary px-5">Save Changes</Button>
      </Form>
    </div>
  )
};

// const EditProfile = () => {
//   return (
//     <div>
//       <h1>Edit Profile</h1>
//       <p>Form to edit your profile on the Jobly site!</p>
//     </div>
//   );
// };


export default EditProfile;