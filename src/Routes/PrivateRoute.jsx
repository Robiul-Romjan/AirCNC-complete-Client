import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Loader from "../components/Shared/Loader/Loader";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()

  if (loading) {
    return <Loader />;
  }

  if(user){
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" replace />
};

export default PrivateRoute;
