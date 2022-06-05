import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createReservation } from "../utils/api";
import ReservationForm from "./ReservationForm";
import ErrorAlert from "../layout/ErrorAlert";

export default function NewReservation() {
  const initial = {
    first_name: "",
    last_name: "",
    mobile_number: "",
    people: 0,
    reservation_date: "",
    reservation_time: "",
    status: "",
  };
  const [form, setForm] = useState({ ...initial });
  const [showError, setShowError] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setShowError(false);
  }, [form]);

  function formatDate(date) {
    let formatedDate = date.split("");
    formatedDate.splice(10);
    formatedDate = formatedDate.join("");
    return formatedDate;
  }

  function formatTime(time) {
    let formatedTime = time.split("");
    formatedTime.splice(5);
    formatedTime = formatedTime.join("");
    return formatedTime;
  }

  function changeHandler({ target }) {
    const { name, value } = target;
    switch (name) {
      case "people":
        setForm({ ...form, [name]: parseInt(value) });
        break;
      case "reservation_date":
        setForm({ ...form, [name]: formatDate(value) });
        break;
      case "reservation_time":
        setForm({ ...form, [name]: formatTime(value) });
        break;
      default:
        setForm({ ...form, [name]: value });
        break;
    }
  }

  async function submitHandler(event) {
    const abort = new AbortController();
    event.preventDefault();
    setShowError(false);
    const newRes = {
      first_name: form.first_name,
      last_name: form.last_name,
      mobile_number: form.mobile_number,
      people: Number(form.people),
      reservation_date: form.reservation_date,
      reservation_time: form.reservation_time,
      status: "booked",
    };
    try {
      await createReservation(newRes, abort.signal);
      setForm(initial);
      history.push(`/dashboard?date=${newRes.reservation_date}`);
    } catch (error) {
      setShowError(await error);
    }

    return () => {
      abort.abort();
    };
  }

  return (
    <div>
      <div className="container p-1 text-center">
        <ErrorAlert error={showError} />
      </div>

      <div className="container fluid text-center">
        <h3 className="my-3 font-monospace">Create A New Reservation</h3>
        <br />
      </div>
      <div className="container fluid">
        <ReservationForm
          form={form}
          submitHandler={submitHandler}
          changeHandler={changeHandler}
        />
      </div>
    </div>
  );
}
