import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuth = () => {
  const {setCurrentUser, user, setLoadingNav} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const addUserToDB = async (user, message) => {
    const newUser = {
        ...user,
        role: "Guest"
    }
    try {
      const response = await api.post(`users/${user.email}`, newUser);
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
        Swal.fire({
          title: "Save!",
          text: "Your room has been saved.",
          icon: "success",
        });
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const makeUserHost = async (email) => {
    try {
      const response = await api.patch(`users/role/${email}`);

      if (response.data.matchedCount === 1 && response.data.modifiedCount === 0) {
        toast.error("You are already host");
      }
      else if(response.data.modifiedCount === 1){
        console.log("")
        Swal.fire({
          title: "Ok!",
          text: "You are now host!! Now you can post room.",
          icon: "success",
        });
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

useEffect(()=> {
  const getCurrentUser = async () => {
    setLoadingNav(true)
    if(user){
     try {
       const response = await api.get(`users/${user?.email}`);
       setCurrentUser(response?.data)
       setLoadingNav(false)
     } catch (error) {
       toast.error(error.message);
       setLoadingNav(false)
     }
    }else{
      setLoadingNav(false)
    }
   };
   getCurrentUser()
}, [setCurrentUser, setLoadingNav, user])


  return { addUserToDB, addRoomToDB, makeUserHost };
};

export default useAuth;
