import { useContext } from "react";
import { Link } from "react-router-dom";
import CurrUserContext from "./CurrUserContext";


const Home = () => {
  const {currentUser} = useContext(CurrUserContext);
  // console.log('usecontext current user', currentUser)
  let user;

  if (currentUser) user = currentUser.user;

  return (
    <div>
      <h1>Jobly</h1>
      <p>Welcome to the Jobly site!</p>
      {currentUser ? 
        <p className="display-5"><b>Welcome Back, {user.firstName}!</b></p> : 
        <p>
          <Link to='/login' className="btn btn-primary mx-3">Login</Link>
          <Link to='/signup' className="btn btn-primary">Sign up</Link>
        </p>
      }
      {/* <p>Welcome to the Jobly site!</p> */}
    </div>
  );
};


export default Home;