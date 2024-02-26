
import { useLoaderData } from "react-router-dom";
import Container from "../../components/Shared/Container";
import RoomInfo from "./RoomInfo";
import RoomReservation from "./RoomReservation";

const RoomDetails = () => {
  const room = useLoaderData()

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto ">
        <div className="flex flex-col gap-6">
          <div className="text-2xl font-bold mt-20">
            {room?.title}
          </div>
          <div className="font-light text-neutral-500 mt-2">
            {room?.location}
          </div>
          <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
            <img
              className="object-cover w-full"
              src={room?.image}
              alt={room.title}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <RoomInfo room={room} />
            <div className="mb-10 md:col-span-3 order-first md:order-last">
              <RoomReservation room={room} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
