/* eslint-disable react/prop-types */
import Button from "../../components/Shared/Button/Button";
import Calender from "../../components/Shared/Calender/Calender";

const RoomReservation = ({ room }) => {
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
        <Button label="Reserve" />
      </div>
      <hr />
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ {room?.price}</div>
      </div>
    </div>
  );
};

export default RoomReservation;
