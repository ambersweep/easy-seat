import React from "react";
import { useHistory } from "react-router-dom";

export default function TableForm({
    form,
    submitHandler,
    changeHandler,
}) {
  const history = useHistory();
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="row g-3 p-2">
          <div className="col">
            <label htmlFor="table_name" className="form-label">
              Table Name:
            </label>
            <input
              type="text"
              name="table_name"
              id="table_name"
              className="form-control"
              value={form["table_name"]}
              onChange={changeHandler}
              required
              placeholder="Table Name"
            ></input>
          </div>
          <div className="col">
            <label htmlFor="capacity" className="form-label">
              Table Capacity:
            </label>
            <input
              type="number"
              name="capacity"
              id="capacity"
              className="form-control"
              value={form["capacity"]}
              onChange={changeHandler}
              required
              placeholder="0"
            ></input>
          </div>
        </div>
        <div className="mt-2 d-flex flex-row-reverse">
          <button
            className="btn btn-dark m-2"
            onClick={() => history.goBack()}
          >
            <i className="bi bi-x-lg"></i>
            &nbsp;Cancel
          </button>
          <button type="submit" className="btn-purple m-2">
            <i className="bi bi-check-lg"></i>
            &nbsp;Submit
          </button>
        </div>
      </form>
    </div>
  );
}
