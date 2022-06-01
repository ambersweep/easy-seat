import React from "react";

export default function SeatTable() {
    return (
        <div className="text-center">
        <select name="table_id">
        <option selected>Choose A Table...</option>
      <option value="1">1</option>
      <option value="2">#2</option>
      <option value="3">Bar #1</option>
      <option value="4">Bar #2</option>
        </select>
        </div>
    );
}