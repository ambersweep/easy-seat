import React from "react";
import ReservationCard from "./ReservationCard";

export default function ListReservations({ reservations }) {
  let reservationsList = reservations.map((reservation) => (
    <ReservationCard
      reservation={reservation}
      key={reservation.reservation_id}
    />
  ));

  if (reservationsList.length) {
    return <div>{reservationsList}</div>;
  } else
    return (
      <div>
        <p className="lead text-center">
            <br/>
          There are currently no reservations for this day
        </p>
      </div>
    );
}
