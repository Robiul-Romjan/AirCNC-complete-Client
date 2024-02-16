import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import Loader from "../Shared/Loader/Loader";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("./roomsData.json")
      .then((res) => res.json())
      .then((data) => setRooms(data));
    setLoading(false);
  }, []);
  // console.log(rooms)
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-12 gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {rooms && rooms.map((room, i) => <Card key={i} room={room} />)}
        </div>
      )}
    </Container>
  );
};

export default Rooms;
