import React from "react";
import { finishTable } from "../utils/api";

export default function TableCard({ table }) {
  const { table_name, capacity, table_id, reservation_id } = table;


  const finishHandler = async (event) => {
    event.preventDefault()
    const abort = new AbortController()
    const message =
      "Is this table ready to seat new guests? This cannot be undone.";
    if(window.confirm(message)){
    try {
      await finishTable(table_id, abort.signal)
      window.location.reload(true);
    } catch (error) {
      if (error.name !== "AbortError") console.log(error)
    }
    return abort.abort()
  }
  }

  if (table) {
    return (
      <div class="card mb-3">
        <div class="card-body text-center">
        <p class="card-title">Table: {table_name}</p>
          <p class="card-text">Capacity: {capacity}</p>
          <p className="card-text" data-table-id-status={table.table_id}>
          Status: {reservation_id ? "Occupied" : "Free"}
        </p>
          <button data-table-id-finish={table.table_id} onClick={finishHandler} className={reservation_id ? "btn btn-primary" : "d-none"}>Finish</button>
        </div>

      </div>
    );
  }
}
