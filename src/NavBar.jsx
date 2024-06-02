import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from 'reactstrap';
import { useContext } from "react";
import CurrUserContext from "./CurrUserContext";
import './NavBar.css'


const NavBar = ({logout}) => {
  const {currentUser} = useContext(CurrUserContext);
  let user;

  if (currentUser) user = currentUser.user;

  return (
    // <nav className="NavBar">
    <div className="NavBar">
      <Navbar className="navbar navbar-expand-md">
        {/* <NavLink id="NavBar-Home" className='navbar-brand' to='/'>Jobly</NavLink> */}
        <NavLink className='navbar-brand' to='/'>Jobly</NavLink>

        <Nav className="ml-auto" navbar>
          {currentUser ? 
            <>
              <NavItem>
              <NavLink className='mx-2' to='/companies'>Companies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='mx-2' to='/jobs'>Jobs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='mx-2' to='/profile'>Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="logout" className='mx-2' to='/login' onClick={logout}>
                  Logout, {user.username}
                </NavLink>
              </NavItem> 
            </> :
            <>
              <NavItem>
                <NavLink className='mx-2' to='/login'>Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='mx-2' to='/signup'>Signup</NavLink>
              </NavItem>
            </>
          }
          {/* <NavItem>
            <NavLink className='mx-2' to='/login'>Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='mx-2' to='/signup'>Signup</NavLink>
          </NavItem> */}
          {/* // <NavItem>
          //   <NavLink className='mx-2' to='/companies'>Companies</NavLink>
          // </NavItem>
          // <NavItem>
          //   <NavLink className='mx-2' to='/jobs'>Jobs</NavLink>
          // </NavItem>
          // <NavItem>
          //   <NavLink className='mx-2' to='/profile'>Profile</NavLink>
          // </NavItem>
          // <NavItem>
          //   <NavLink id="logout" className='mx-2' to='/login' onClick={logout}>
          //     Logout, {user.username}
          //   </NavLink>
          // </NavItem> */}
        </Nav>
      </Navbar>
    </div>

    // <nav className="NavBar">
    //     {/* <NavLink id="NavBar-Home" className='navbar-brand' to='/'>Jobly</NavLink> */}
    //     <NavLink className='navbar-brand' to='/'>Jobly</NavLink>

    //         <NavLink to='/login'>Login</NavLink>
    //         <NavLink to='/signup'>Signup</NavLink>
    // </nav>
  )
};


export default NavBar;