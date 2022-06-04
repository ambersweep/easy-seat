import React from "react";
import TableCard from "./TableCard";
import LoadingSpinner from "../layout/LoadingSpinner";

export default function TableList({ tables }) {
  let tablesList = tables.map((table) => (
    <TableCard key={table.table_id} table={table} />
  ));
  if(!tablesList.length){
    return (
<LoadingSpinner/>
    )
  }
  return <div>{tablesList}</div>;
}

