import React, { Component } from 'react';
import './clubForm.css';

export default class Form extends Component {
    render() {
        return (
        <form  className="form bg-dark text-light">
            <h3>Add a Club</h3>
            <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="Name"></input>
            </div>
            <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="League"></input>
            </div>
            <div className="form-group">
                <input type="text"
                  className="form-control"
                placeholder="Phone"></input>
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
        );
    }
}