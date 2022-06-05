import React from "react";
import { deleteTable, finishTable } from "../utils/api";

export default function TableCard({ table }) {
  const { table_name, capacity, table_id, reservation_id } = table;

  //clears out table for a new reservation
  const finishHandler = async (event) => {
    event.preventDefault();
    const abort = new AbortController();
    const message =
      "Is this table ready to seat new guests? This cannot be undone.";
    if (window.confirm(message)) {
      try {
        await finishTable(table_id, abort.signal);
        window.location.reload(true);
      } catch (error) {
        if (error.name !== "AbortError") console.log(error);
      }
      return abort.abort();
    }
  };

  const deleteHandler = async (event) => {
    event.preventDefault();
    const abort = new AbortController();
    const message = "Do you want to delete this table? This cannot be undone.";
    if (window.confirm(message)) {
      try {
        await deleteTable(table_id, abort.signal);
        window.location.reload(true);
      } catch (error) {
        if (error.name !== "AbortError") alert(error.message);
      }
      return abort.abort();
    }
  };

  if (table) {
    return (
      <div className="card mb-3 shadow-sm">
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <p className="mr-2 mt-2 mb-2 p-3"></p>
            <p className="card-text mt-3">Table: {table_name}</p>
            <button
              onClick={deleteHandler}
              className="mr-2 mt-2 mb-2 btn btn-outline-danger"
            >
              <i class="bi bi-trash3-fill"></i>
            </button>
          </div>
        </div>
        <div className="card-body text-center">
          <p className="card-text">Capacity: {capacity}</p>
          <p className="card-text" data-table-id-status={table.table_id}>
            Status: {reservation_id ? "Occupied" : "Free"}
          </p>
          <button
            data-table-id-finish={table.table_id}
            onClick={finishHandler}
            className={reservation_id ? "btn-purple" : "d-none"}
          >
            Finish
          </button>
        </div>
      </div>
    );
  }
}
