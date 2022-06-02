import React from "react";
//import { listTables } from "../utils/api";
import { useHistory } from "react-router";

export default function SeatTable() {
  //const [tables, setTables] = useState([]);
  const history = useHistory();
  return (
    <div className="container">
      <h3 className="my-3 font-monospace text-center">Seat Reservation</h3>
      <hr />
      <div>
        <form
          class="row g-3 justify-content-center text-center"
          onSubmit={() => console.log("submitted")}
        >
          <div class="col-auto mt-3">
            <span>Select A Table:</span>
          </div>
          <div class="col-auto mt-3">
            <select class="form-select" name="table_id">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-auto">
            <button className="btn btn-primary m-2" type="submit">
              Submit
            </button>
            <button className="btn btn-danger m-2" onClick={()=>history.push("/")}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
