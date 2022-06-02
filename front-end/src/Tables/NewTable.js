import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createTable } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";
import TableForm from "./TableForm";

export default function NewReservation() {
  const initial = {
    table_name: "",
    capacity: 0,
  };
  const [form, setForm] = useState(initial);
  const [showError, setShowError] = useState(false);
  const abortController = new AbortController();
  const history = useHistory();

  function changeHandler({ target }) {
    const { name, value } = target;
    switch (name) {
      case "capacity":
        setForm({ ...form, [name]: parseInt(value) });
        break;
      default:
        setForm({ ...form, [name]: value });
        break;
    }
  }

  async function submitHandler(event) {
    event.preventDefault();
    setShowError(false);
    const newRes = {
      table_name: form.table_name,
      capacity: form.capacity,
    };
    try {
      await createTable(newRes, abortController.signal);
      setForm(initial);
      history.push(`/dashboard`);
    } catch (error) {
      if (error.name !== "AbortError") setShowError(error);
    }

    return () => {
      abortController.abort();
    };
  }
  
  return (
    <div>
      <div className="container p-2">
        <ErrorAlert error={showError} />
      </div>

      <div className="container fluid text-center">
        <h3 className="my-3 font-monospace">Create A New Table</h3>
        <hr />
      </div>
      <div className="container fluid">
        <TableForm
          form={form}
          submitHandler={submitHandler}
          changeHandler={changeHandler}
        />
      </div>
    </div>
  );
}
