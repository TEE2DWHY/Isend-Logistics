import { Outlet} from "react-router-dom";
import Login from "../pages/Login";


const PrivateRoute = () => {
    const auth = sessionStorage.getItem("loggedIn");
  return (
   <>
        {auth ? <Outlet/> : <Login/>}
   </>
  )
}

export default PrivateRoute