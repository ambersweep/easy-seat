import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createTable } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";
import TableForm from "./TableForm";

export default function NewReservation() {
  const initialForm = {
    table_name: "",
    capacity: 0,
  };
  const [form, setForm] = useState(initialForm);
  const [showError, setShowError] = useState(false);
  const history = useHistory();

  //when data is typed into form it updates form state
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
  //when form is submitted it sends form data to api to create a new table, then returns to dashboard
  async function submitHandler(event) {
    event.preventDefault();
    const abort = new AbortController();
    setShowError(false);
    try {
      await createTable(
        {
          table_name: form.table_name,
          capacity: form.capacity,
        },
        abort.signal
      );
      setForm(initialForm);
      history.push(`/dashboard`);
    } catch (error) {
      if (error.name !== "AbortError") setShowError(error);
    }

    return () => {
      abort.abort();
    };
  }

  return (
    <div>
      <div className="container mt-2">
        <ErrorAlert error={showError} />
      </div>
      <div className="container fluid text-center">
        <h3 className="my-3">Create A New Table</h3>
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
