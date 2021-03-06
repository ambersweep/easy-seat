import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch, Link } from "react-router-dom";
import { listReservations, listTables } from "../utils/api";
import { next, previous, today } from "../utils/date-time";
import useQuery from "../utils/useQuery";
import ErrorAlert from "../layout/ErrorAlert";
import ListReservations from "../Reservations/ListReservations";
import TableList from "../Tables/TableList";

/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard({ date, setDate }) {
  const [reservations, setReservations] = useState([]);
  const [tables, setTables] = useState([]);
  const [reservationsError, setReservationsError] = useState(null);

  const history = useHistory();
  const query = useQuery();
  const route = useRouteMatch();

  useEffect(loadDashboard, [date]);

  useEffect(() => {
    function updateDate() {
      const queryDate = query.get("date");
      if (queryDate) {
        setDate(queryDate);
      } else {
        setDate(today());
      }
    }
    updateDate();
  }, [query, route, setDate]);
  useEffect(loadDashboard, [date]);

  function loadDashboard() {
    const abortController = new AbortController();
    setReservationsError(null);
    listReservations({ date }, abortController.signal)
      .then(setReservations)
      .catch(setReservationsError);
    listTables(abortController.signal).then(setTables);
    return () => abortController.abort();
  }

  return (
    <main>
      <h2 className="text-center mt-4">Dashboard</h2>
      <div className="container">
      <br/>
      </div>
      <div className="container text-center mb-2">
        <button
          className="btn btn-secondary m-2"
          onClick={() => history.push(`/dashboard?date=${previous(date)}`)}
        >
          <i className="bi bi-arrow-left"></i>
        </button>
        <button
          className="btn-purple m-2"
          onClick={() => history.push(`/dashboard?date=${today()}`)}
        >
          Today
        </button>
        <button
          className="btn btn-secondary m-2"
          onClick={() => history.push(`/dashboard?date=${next(date)}`)}
        >
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
      <div className="row justify-content-center px-4">
        <div className="col-lg-4 m-2">
          <div className="text-center mb-3">
            <h4>Reservations for {date} <Link className="text-purple" to="/reservations/new"><b><i className="bi bi-plus-lg"></i></b></Link></h4>
          </div>
          <div className="container">
            <ErrorAlert error={reservationsError} />
          </div>
          <div className="container">
            <ListReservations reservations={reservations} />
          </div>
        </div>
        <div className="col-lg-4 text-center m-2">
          <div className="text-center text-poppins mb-3">
            <h4>Tables <Link className="text-purple" to="/tables/new"><b><i className="bi bi-plus-lg"></i></b></Link></h4>
          </div>
          <div className="container text-center">
            <TableList tables={tables} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
