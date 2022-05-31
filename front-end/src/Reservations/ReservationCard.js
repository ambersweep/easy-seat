import React from "react";

export default function ReservationCard({reservations}) {
    return(
        <div class="card container">
        <div class="card-body text-center">
          <h5 class="card-title">Reservation</h5>
          <p class="card-text">Status: {reservations.length ? reservations[0]["status"] : "Free"}</p>
          <p class="card-text">Name: {reservations.length ? reservations[0]["first_name"] : null}  {reservations.length ? reservations[0]["last_name"] : null}</p>
          <p class="card-text">Mobile: {reservations.length ? reservations[0]["mobile_number"] : null}</p>
          <p class="card-text">Party Size: {reservations.length ? reservations[0]["people"] : null}</p>
          <p class="card-text">{reservations.length ? reservations[0]["reservation_date"] + " at" : null}  {reservations.length ? reservations[0]["reservation_time"] : null }</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
    )
}