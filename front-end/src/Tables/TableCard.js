import React from "react";

export default function ReservationCard({ table }) {
  const { table_name, capacity } = table;

  if (table) {
    return (
      <div class="card mb-3">
        <div class="card-body text-center">
        <p class="card-title">Table: {table_name}</p>
          <p class="card-text">Capacity: {capacity}</p>
        </div>
      </div>
    );
  }
}
