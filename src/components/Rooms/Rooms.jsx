import { useContext, useEffect } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import Loader from "../Shared/Loader/Loader";
import { AuthContext } from "../../providers/AuthProvider";
import { useSearchParams } from "react-router-dom";
import NoDataFound from "../Shared/NoDatFound/NoDataFound";
import { toast } from "react-toastify";
import api from "../../api/axios";

const Rooms = () => {
  const { rooms, setRooms, loading, setLoading } = useContext(AuthContext);

  const [params] = useSearchParams();
  const category = params.get("category");

  useEffect(() => { 
    setLoading(true);
    const getRoomsToDB = async () => {
      try {
        const response = await api.get(`rooms`);
        if (category) {
          const categoryData = response?.data.filter(
            (room) => room.category === category
          );
          setRooms(categoryData);
          setLoading(false);
        } else {
          setRooms(response?.data);
          setLoading(false);
        }
      } catch (error) {
        toast.error(error.message);
        setLoading(false);
      }
    };
    getRoomsToDB();
    
  }, [category, setLoading, setRooms]);

  if (loading) {
    return <Loader />;
  }

  if (rooms.length <= 0) {
    return (
      <NoDataFound
        title="No rooms found"
        subtitle="there are no rooms"
        center={true}
      />
    );
  }

  return (
    <Container>
      <div className="mt-12 gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {rooms && rooms.map((room, i) => <Card key={i} room={room} />)}
      </div>
    </Container>
  );
};

export default Rooms;
