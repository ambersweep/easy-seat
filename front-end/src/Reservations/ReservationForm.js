import React from "react";
import { useHistory } from "react-router-dom";

export default function ReservationForm({
  form,
  submitHandler,
  changeHandler,
}) {
  const history = useHistory();
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="row g-3 p-2">
          <div className="col">
            <label htmlFor="first_name" className="form-label">
              First Name:
            </label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              className="form-control"
              value={form["first_name"]}
              onChange={changeHandler}
              required
              placeholder="First Name"
              aria-label="First Name"
            ></input>
          </div>
          <div className="col">
            <label htmlFor="last_name" className="form-label">
              Last Name:
            </label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              className="form-control"
              value={form["last_name"]}
              onChange={changeHandler}
              required
              placeholder="Last Name"
              aria-label="Last name"
            ></input>
          </div>
        </div>
        <div className="row g-3 p-2">
          <div className="col">
            <label htmlFor="mobile_number" className="form-label">
              Phone Number:
            </label>
            <input
              type="text"
              name="mobile_number"
              id="mobile_number"
              className="form-control"
              value={form["mobile_number"]}
              onChange={changeHandler}
              required
              placeholder="000-000-0000"
              aria-label="Mobile Number"
            ></input>
          </div>
          <div className="col">
            <label htmlFor="people" className="form-label">
              Party Size:
            </label>
            <input
              type="number"
              name="people"
              id="people"
              className="form-control"
              value={form["people"]}
              onChange={changeHandler}
              required
              placeholder="0"
              aria-label="people"
            ></input>
          </div>
        </div>
        <div className="row g-3 p-2">
          <div className="col">
            <label htmlFor="reservation_date" className="form-label">
              Reservation Date:
            </label>
            <input
              type="date"
              name="reservation_date"
              id="reservation_date"
              className="form-control"
              value={form["reservation_date"]}
              onChange={changeHandler}
              required
              aria-label="date"
            ></input>
          </div>
          <div className="col">
            <label htmlFor="reservation_time" className="form-label">
              Reservation Time:
            </label>
            <input
              type="time"
              name="reservation_time"
              className="form-control"
              value={form["reservation_time"]}
              onChange={changeHandler}
              required
              aria-label="time"
            ></input>
          </div>
        </div>
        <div className="mt-2 d-flex flex-row-reverse">
          <button
            className="btn btn-dark m-2"
            onClick={() => history.goBack()}
          >
            <i className="bi bi-x-lg"></i>
            &nbsp;Cancel
          </button>
          <button type="submit" className="btn-purple m-2">
            <i className="bi bi-check-lg"></i>
            &nbsp;Submit
          </button>
        </div>
      </form>
    </div>
  );
}
