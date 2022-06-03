import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readReservation, updateReservation } from "../utils/api";
import ReservationForm from "./ReservationForm";
import ErrorAlert from "../layout/ErrorAlert";

export default function EditReservation() {
  const initialForm = {
    first_name: "",
    last_name: "",
    mobile_number: "",
    people: 0,
    reservation_date: "",
    reservation_time: "",
    status: "",
  };
  const [form, setForm] = useState({ ...initialForm });
  const [showError, setShowError] = useState(false);
  const abort = new AbortController();
  const history = useHistory();
  const { reservation_id } = useParams();
  const resId = parseInt(reservation_id);

  useEffect(() => {
    const abort = new AbortController();
    const initialReservation = {
      first_name: "",
      last_name: "",
      mobile_number: "",
      people: 0,
      reservation_date: "",
      reservation_time: "",
      status: "",
      reservation_id: "",
    };

    async function fetchReservation() {
      try {
        const response = await readReservation(resId, abort.signal);
        initialReservation.first_name = response.first_name;
        initialReservation.last_name = response.last_name;
        initialReservation.mobile_number = response.mobile_number;
        initialReservation.people = parseInt(response.people);
        initialReservation.reservation_id = parseInt(response.reservation_id);
        initialReservation.reservation_date = formatDate(
          response.reservation_date
        );
        initialReservation.reservation_time = formatTime(
          response.reservation_time
        );
        setForm({ ...initialReservation });
      } catch (error) {
        if (error.name !== "AbortError") setShowError(error);
      }
    }
    fetchReservation();
    return () => abort.abort();
  }, [resId]);

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
    event.preventDefault();
    setShowError(false);
    const updatedRes = {
      first_name: form.first_name,
      last_name: form.last_name,
      mobile_number: form.mobile_number,
      people: Number(form.people),
      reservation_id: resId,
      reservation_date: form.reservation_date,
      reservation_time: form.reservation_time,
      status: "booked",
    };
    try {
      await updateReservation(updatedRes, abort.signal);
      history.push(`/dashboard?date=${updatedRes.reservation_date}`);
    } catch (error) {
      if (error.name !== "AbortError") setShowError(error);
    }

    return () => {
      abort.abort();
    };
  }
  return (
    <div>
      <div className="container p-2">
        <ErrorAlert error={showError} />
      </div>

      <div className="container fluid text-center">
        <h3 className="my-3 font-monospace">Edit Reservation</h3>
        <hr />
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
