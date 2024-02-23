import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { toast } from "react-toastify";

const useAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const addUserToDB = async (user, message) => {
    const newUser = {
        ...user,
        role: "Guest"
    }

    try {
      const response = await api.put(`users/${user.email}`, newUser);
      if (response.statusText === "OK") {
        console.log("its ok");
        navigate(from, { replace: true });
        toast("Successfully login");
      }
    } catch (error) {
      toast.error(message);
    }
  };
 


  return { addUserToDB };
};

export default useAuth;
