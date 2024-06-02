import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './Home';
import Companies from './Companies';
import Company from './Company';
import Jobs from './Jobs';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import EditProfile from './EditProfile';
import PrivateRoutes from './PrivateRoutes';

const RoutesList = ({login, signup}) => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/companies' element={<Companies />} /> */}
      {/* <ProtectedRoutes path='/companies' element={<Companies />} /> */}
      {/* <Route path='/companies/:company' element={<Company />} /> */}
      {/* <ProtectedRoutes path='/companies/:company' element={<Company />} /> */}
      {/* <Route path='/jobs' element={<Jobs />} /> */}
      {/* <ProtectedRoutes path='/jobs' element={<Jobs />} /> */}
      <Route element={<PrivateRoutes />}>
        <Route path='/companies' element={<Companies />} />
        <Route path='/companies/:company' element={<Company />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/profile' element={<EditProfile />} />
      </Route>
      <Route path='/login' element={<LoginForm login={login} />} />
      <Route path='/signup' element={<SignupForm signup={signup} />} />
      {/* <Route path='/profile' element={<EditProfile />} /> */}
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};


export default RoutesList;