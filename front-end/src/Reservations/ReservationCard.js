import React from "react";

export default function ReservationCard({ reservations }) {
  const {
    first_name,
    last_name,
    people,
    reservation_id,
    reservation_time,
    reservation_date,
    status,
    mobile_number,
  } = reservations;

  if (reservations) {
    return (
      <div class="card container mb-2">
        <div class="card-body text-center">
          <p class="card-text">{status}</p>
          <p class="card-text">
            Name: {first_name} {last_name}
          </p>
          <p class="card-text">Mobile: {mobile_number}</p>
          <p class="card-text">Party Size: {people}</p>
          <p class="card-text">
            {reservation_date + " at"}
            {reservation_time}
          </p>
          <button href="#" class="btn btn-primary m-2">
            Seat
          </button>
          <button href="#" class="btn btn-secondary m-2">
            Edit
          </button>
          <button href="#" class="btn btn-danger m-2">
            Delete
          </button>
        </div>
      </div>
    );
  } 
}
