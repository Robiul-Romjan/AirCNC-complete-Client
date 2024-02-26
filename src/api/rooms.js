import { toast } from "react-toastify";
import api from "./axios";


export const getSingleRoom = async (id) => {
    try {
      const response = await api.get(`room/${id}`);
      return response.data
    } catch (error) {
      toast.error(error.message);
    }
  };


