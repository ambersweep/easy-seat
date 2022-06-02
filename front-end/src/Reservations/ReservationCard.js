import React from "react";

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
      console.log("Pressed confirm")
  }

 const seatButton = (
  <a
  className="btn btn-primary m-2"
  href={`/reservations/${reservation_id}/seat`}
>
  Seat
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
          <a
            className="btn btn-secondary m-2"
            href={`/reservations/${reservation_id}/edit`}
          >
            Edit
          </a>
          <button
            className="btn btn-danger m-2"
            data-toggle="modal" data-target="#cancelModal"
          >
            Cancel
          </button>
        </div>

      {/* Confirmation modal for cancelling reservation */}
        <div className="modal fade" id="cancelModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Cancel Reservation</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       Are you sure you would like to cancel this reservation?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" onClick={cancelHandler} data-dismiss="modal">Ok</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
      </div>
    </div>
  </div>
</div>

      </div>
    );
  }
}
