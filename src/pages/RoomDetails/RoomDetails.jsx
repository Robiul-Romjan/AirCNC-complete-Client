import Container from "../../components/Shared/Container";
import RoomInfo from "./RoomInfo";
import RoomReservation from "./RoomReservation";

const RoomDetails = () => {
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto ">
        <div className="flex flex-col gap-6">
          <div className="text-2xl font-bold mt-20">
            Veluvana Bali - Owl Bamboo House
          </div>
          <div className="font-light text-neutral-500 mt-2">
            Sidemen, Indonesia
          </div>
          <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
            <img
              className="object-cover w-full"
              src="https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg"
              alt="header image"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <RoomInfo />
            <div className="mb-10 md:col-span-3 order-first md:order-last">
              <RoomReservation />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
