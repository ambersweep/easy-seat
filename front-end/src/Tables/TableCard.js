import React from "react";

export default function ReservationCard({ table }) {
  const {
    table_name, capacity
  } = table;

  if (table) {
    return (
      <div class="card container mb-2">
        <div class="card-body text-center">
          <p class="card-text">
            Table: {table_name}
          </p>
          <p class="card-text">Capacity: {capacity}</p>
        </div>
      </div>
    );
  } 
}
