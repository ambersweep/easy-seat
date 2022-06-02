import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
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
  const [tablesError, setTablesError] = useState(null);

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
    listTables(abortController.signal).then(setTables).catch(setTablesError);
    return () => abortController.abort();
  }

  return (
    <main>
      <h2 className="text-center mt-4">Dashboard</h2>
      <div className="container">
        <hr />
      </div>
      <div className="container text-center mb-2">
        <button
          className="btn btn-secondary m-2"
          onClick={() => history.push(`/dashboard?date=${previous(date)}`)}
        >
          <i class="bi bi-arrow-left"></i>
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => history.push(`/dashboard?date=${today()}`)}
        >
          Today
        </button>
        <button
          className="btn btn-secondary m-2"
          onClick={() => history.push(`/dashboard?date=${next(date)}`)}
        >
          <i class="bi bi-arrow-right"></i>
        </button>
      </div>
      <div className="text-center mb-3">
        <h4>Reservations for {date}</h4>
      </div>
      <div className="container">
        <ErrorAlert error={reservationsError} />
      </div>
      <div className="container">
        <ListReservations reservations={reservations} />
      </div>
      <br />
      <div className="text-center mb-3">
        <h4>Tables</h4>
      </div>
      <div className="container text-center">
        <TableList tables={tables} />
      </div>
    </main>
  );
}

export default Dashboard;
