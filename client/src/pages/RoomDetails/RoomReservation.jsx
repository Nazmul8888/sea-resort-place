/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// import { formatDistance } from "date-fns";
// import { formatDistance } from "date-fns";
import Button from "../../components/Button/Button";
import Calender from "./Calender/Calender";
// import { useState } from "react";



const RoomReservation = ({room}) => {

    // calender price calculation

    // const totalDay = parseInt(formatDistance(new Date(room.to), new Date(room.from)).split(' '))
    // const totalPrice = totalDay * room?.price

    // const [value, setValue] = useState({
    //     startDate: new Date(room?.from),
    //     endDate: new Date(room?.to),
    //     key:'selection',
    // })




    return (
        <div className=" rounded-xl border-[1px] border-neutral-200 bg-white">
            <div className=" flex items-center gap-1 p-4">
                <div className=" text-2xl  font-semibold">$ {room?.price}</div>
                <div className=" font-light text-neutral-600">Night</div>

            </div>
            <hr />
          <div className=" flex justify-center"><Calender /></div>
          <hr />
          <div className=" p-4"><Button label={'Reserve'}/></div>
          <hr />
          <div className="p-4 flex items-center justify-between font-semibold text-lg">
            <div>Total</div>
            <div>$ {room?.price}</div>
          </div>
        </div>
    );
};

export default RoomReservation;