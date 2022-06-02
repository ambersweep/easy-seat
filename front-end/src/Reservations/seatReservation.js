import React, { useState, useEffect } from "react";
import { listTables, readReservation } from "../utils/api";
import { useHistory, useParams } from "react-router";
import { seatReservation } from "../utils/api";

export default function SeatTable() {
  const initialForm = { table_id: "" };
  const [form, setForm] = useState(initialForm);
  const [tables, setTables] = useState([]);
  const [reservations, setReservations] = useState([]);
  const history = useHistory();
  const { reservation_id } = useParams();

  useEffect(() => {
    const abort = new AbortController();

    //fetches table data from api
    async function fetchTables() {
      try {
        const response = await listTables(abort.signal);
        setTables(response);
      } catch (error) {
        if (error.name !== "AbortError") console.log(error);
      }
    }
    //fetches reservation data from api
    async function fetchReservations() {
      try {
        const response = await readReservation(reservation_id, abort.signal);
        setReservations(response);
      } catch (error) {
        if (error.name !== "AbortError") console.log(error);
      }
    }
    fetchTables();
    fetchReservations();
    return () => abort.abort();
  }, [reservations.reservation_id]);

  const tableSelection = tables.map((table) => {
    const disabled = Number(table.capacity) < Number(reservations.people);
    return (
      <option key={table.table_id} value={table.table_id} disabled={disabled}>
        {table.table_name} - {table.capacity}
      </option>
    );
  });

  const changeHandler = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  async function submitHandler(event) {
    const abort = new AbortController();
    event.preventDefault();
    console.log("submitted");
    const table_id = Number(form.table_id);
    const reservation = parseInt(reservation_id);
    setForm(initialForm);
    try {
      await seatReservation(reservation, table_id, abort.signal);
      history.push("/dashboard");
    } catch (error) {
      if (error.name !== "AbortError") console.log(error);
    }
    return () => abort.abort();
  }

  return (
    <div className="container">
      <h3 className="my-3 font-monospace text-center">Seat Table</h3>
      <hr />
      <div>
        <form
          class="row g-2 justify-content-center text-center"
          onSubmit={submitHandler}
        >
          <div class="col-auto mt-3">
            <span>Select a Table:</span>
          </div>
          <div class="col-auto mt-3">
            <select
              class="form-select"
              name="table_id"
              onChange={changeHandler}
            >
              {tableSelection}
            </select>
          </div>

          <button className="btn btn-primary m-2" type="submit">
            Submit
          </button>
          <button
            className="btn btn-secondary m-2"
            onClick={() => history.push("/")}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
