/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import Button from "../../components/Shared/Button/Button";
import Calender from "../../components/Shared/Calender/Calender";
import { AuthContext } from "../../providers/AuthProvider";
import BookingModal from "../../components/Modals/BookingModal";

const RoomReservation = ({ room }) => {
  const {user} = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false);
  const [bookingInfo, setBookingInfo] = useState({
    title: room?.title,
    location: room?.location,
    from: room?.from,
    to:room?.to,
    host: {
      name: room?.owner?.name,
      email: room?.owner?.email
    },
    price:room?.price,
    booker: {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL
    }
  })


  const handleBooking = () => {
     console.log("click")
     setIsOpen(false)
     console.log(bookingInfo)
  }

  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {room?.price}</div>
        <div className="font-light text-neutral-600">{room?.category}</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender />
      </div>
      <hr />
      <div className="p-4">
        <Button 
        onClick={()=> setIsOpen(true)}
        disabled={room?.owner?.email === user?.email} 
        label="Reserve"
         />
      </div>
      <hr />
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ {room?.price}</div>
      </div>
      {
        isOpen && <BookingModal modalHandler={handleBooking} isOpen={isOpen} closeModal={setIsOpen} bookingInfo={bookingInfo}/>
      }
    </div>
  );
};

export default RoomReservation;
