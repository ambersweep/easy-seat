import React from "react";
import { updateStatus } from "../utils/api";

export default function ReservationCard({ reservation }) {
  const {
    first_name,
    last_name,
    people,
    reservation_id,
    reservation_time,
    status,
    mobile_number,
  } = reservation;

  async function cancelHandler(event){
    event.preventDefault()
    const abort = new AbortController()
    const message =
    "Do you want to cancel this reservation? This cannot be undone.";
    if(window.confirm(message)){
      try {
        await updateStatus(
          reservation.reservation_id,
          "cancelled",
          abort.signal
        );
        window.location.reload(true);
      } catch (error) {
        if (error.name !== "AbortError") console.log(error)
      }
    }
  }

 const seatButton = (
  <a
  className="btn btn-primary m-2"
  href={`/reservations/${reservation_id}/seat`}
>
  Seat
</a>
 )

 const editButton = (
  <a
  className="btn btn-secondary m-2"
  href={`/reservations/${reservation_id}/edit`}
>
  Edit
</a>
 )

  if (reservation) {
    return (
      <div class="card mb-2">
        <div class="card-body text-center">
          <p class="card-text" data-reservation-id-status={reservation.reservation_id}>{status}</p>
          <p class="card-text">
            Name: {first_name} {last_name}
          </p>
          <p class="card-text">Mobile: {mobile_number}</p>
          <p class="card-text">Party Size: {people}</p>
          <p class="card-text">
            Reservation Time:
            {" " + reservation_time}
          </p>
          {status !== "seated" ? seatButton : null}
          {status === "booked" ? editButton : null}
          <button
            className="btn btn-danger m-2"
            data-reservation-id-cancel={reservation.reservation_id}
            onClick={cancelHandler}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}
