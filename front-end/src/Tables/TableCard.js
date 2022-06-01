import React from "react";

export default function ReservationCard({ table }) {
  const { table_name, capacity, reservation_id } = table;

  if (table) {
    return (
      <div class="card mb-3">
        <div class="card-body text-center">
        <p class="card-title">Table: {table_name}</p>
          <p class="card-text">Capacity: {capacity}</p>
          <p className="card-text" data-table-id-status={table.table_id}>
          Status: {reservation_id ? "Occupied" : "Free"}
        </p>
          <button className="btn btn-primary">Finish</button>
        </div>
      </div>
    );
  }
}
