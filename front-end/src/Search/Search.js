import React, {useState} from "react";
import SearchForm from "./SearchForm";
import ErrorAlert from "../layout/ErrorAlert";

export default function Search(){

    return (
        <div>
        <div className="container p-2">
        </div>
  
        <div className="container fluid text-center">
          <h3 className="my-3 font-monospace">Search For A Reservation</h3>
          <hr />
        </div>
        <div className="container">
        <br/>
            <SearchForm/>
        </div>
      </div>
    )
}