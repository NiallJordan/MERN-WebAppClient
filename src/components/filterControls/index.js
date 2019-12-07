import React, { Component } from "react";
import "./filterControls.css"

export default class FilterControls extends Component {
  handleChange = (e,type,value) => {
    e.preventDefault();
    this.props.onUserInput(type,value);
  };

  handleTextChange = e =>{
    this.handleChange(e,"name",e.target.value);
  };

  handleLeagueChange = e => {
    this.handleChange(e,"league",e.target.value);
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row bg-warning">
          <div className="col-md-12">
            <h4>
              <span>Name: </span>
              <input type="text" placeholder="Name Search" onChange={this.handleTextChange}/>
              <span> League: </span>
              <select id="league" onChange={this.handleLeagueChange}>
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