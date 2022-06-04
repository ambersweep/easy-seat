import React from "react";
import { Link } from "react-router-dom";

/**
 * Defines the menu for this application.
 *
 * @returns {JSX.Element}
 */

function Menu() {
  return (
    <nav className="navbar navbar-dark main-navbar navbar-expand-md sticky-top shadow">
      <a
        className="navbar-brand white-text position-absolute d-none d-md-block"
        href="/"
      >
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

      <div
        className="collapse navbar-collapse justify-content-center "
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              <i className="bi bi-speedometer2"></i>
              &nbsp;Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reservations/new">
              <i className="bi bi-plus-lg"></i>
              &nbsp;New Reservation
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tables/new">
              <i className="bi bi-plus-lg"></i>
              &nbsp;New Table
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search">
              <i className="bi bi-search"></i>
              &nbsp;Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
