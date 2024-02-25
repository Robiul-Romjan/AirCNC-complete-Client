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
        navigate(from, { replace: true });
        toast("Successfully login");
      }
    } catch (error) {
      toast.error(message);
    }
  };


  const addRoomToDB = async (room) => {
    try {
      const response = await api.post(`rooms`, room);
      if (response.statusText === "OK") {
        toast("Successfully Added Your Room");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
 


  return { addUserToDB, addRoomToDB };
};

export default useAuth;
