import React, { useState, useEffect } from "react";
import ErrorAlert from "../layout/ErrorAlert";
import { listReservations } from "../utils/api";
import ReservationCard from "../Reservations/ReservationCard";

export default function SearchForm() {
  const initialForm = {
    mobile_number: "",
  };
  const [form, setForm] = useState(initialForm);
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);
  const [results, setShowResults] = useState(false);

  //resets search on page load
  useEffect(() => {
    setForm(initialForm);
    setReservations([]);
    setShowResults(false);
  }, []);

  function changeHandler({ target }) {
    setForm({ ...form, [target.name]: target.value });
  }

  async function submitHandler(event) {
    event.preventDefault();
    const abort = new AbortController();
    setError(null);
    try {
      const response = await listReservations(
        { mobile_number: form.mobile_number },
        abort.signal
      );
      setReservations(response);
      setShowResults(true);
    } catch (error) {
      if (error.name !== "AbortError") setError(error);
    }
    return () => abort.abort();
  }

  const searchResults = reservations.length
    ? reservations.map((reservation) => (
        <ReservationCard
          key={reservation.reservation_id}
          reservation={reservation}
        />
      ))
    : "No reservations found";

  return (
    <div>
      <ErrorAlert error={error} />
      <div className="row justify-content-between px-4">
        <form className="col-lg-4" onSubmit={submitHandler}>
          <input
            className="form-control"
            name="mobile_number"
            type="search"
            placeholder="Enter a customer's phone number"
            onChange={changeHandler}
            required
          ></input>
          <button
            className="btn btn-primary mt-2 col text-center"
            type="submit"
          >
            Submit
          </button>
        </form>
        <div className="col-lg-6 text-center">
          {results ? searchResults : null}
        </div>
      </div>
    </div>
  );
}
