import Cookies from "js-cookie";
import {  Navigate} from "react-router-dom";
const PrivateRoute = ({ children }) => {
  let islogin = Cookies.get("token");
  return !!islogin===true ? children : <Navigate to='/login'/>
};

export default PrivateRoute;
