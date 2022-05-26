import React from "react";
import { Link } from "react-router-dom";

/**
 * Defines the menu for this application.
 *
 * @returns {JSX.Element}
 */

function Menu() {
  return (
    <nav class="navbar navbar-dark main-navbar navbar-expand-md sticky-top shadow">
      <a className="navbar-brand white-text" href="/">
        <b>Periodic Tables</b>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link  white-text" to="/dashboard">
              <i class="bi bi-speedometer2"></i>
              &nbsp;Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reservations/new">
              <i class="bi bi-plus-lg"></i>
              &nbsp;New Reservation
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link green-text" to="/tables/new">
              <i class="bi bi-plus-lg"></i>
              &nbsp;New Table
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
