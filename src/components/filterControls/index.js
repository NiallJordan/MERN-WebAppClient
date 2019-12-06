import React, { Component } from "react";
import "./filterControls.css"

export default class FilterControls extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row bg-warning">
          <div className="col-md-12">
            <h4>
              <span>Name: </span>
              <input type="text" placeholder="Name Search" />
              <span> League: </span>
              <select id="position">
                <option value="all">All</option>
                <option value="pl">Premier League</option>
                <option value="serie">Serie A</option>
              </select>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}