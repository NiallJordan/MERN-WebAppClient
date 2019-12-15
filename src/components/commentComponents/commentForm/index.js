import React, { Component } from "react";
import api from '../../../dataStore/stubAPI';

export default class Form extends Component {
  state = { comment: "", name: "", points:0 };

  handleCommentChange = (e) => this.setState({ comment: e.target.value });
  handleNameChange = (e) => this.setState({ name: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.comment,this.state.name)
    this.setState({
      comment:'',
      name:'',
      points:0
    })
  }

  render() {
    return (
      <form className="form bg-dark text-light" style={{ marginTop: "30px" }}>
        <h3>Add a new comment</h3>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Comment"
            value={this.state.comment}
            onChange={this.handleCommentChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Your name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.onSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}