import React, { Component, Fragment } from "react";
import "../../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './comment.css'

class Comment extends Component {
    handleUpvote = () => {
      this.props.upvoteHandler(this.props.comment.id);
    };

    handleDownvote = () => {
      this.props.downvoteHandler(this.props.comment.id);
    };

    render() {
      return (
        <Fragment>
          <span className=" ptr" onClick={this.handleUpvote}>
            <FontAwesomeIcon icon={["fas", "thumbs-up"]} />
          </span>
          {` ${this.props.comment.points}`}
          <span className=" ptr" onClick={this.handleDownvote}>
            <FontAwesomeIcon icon={["fas", "thumbs-down"]} />
          </span>
          <span className="commentitem">
            {`${this.props.comment.comment} (by ${this.props.comment.name})`}
          </span>
          <p></p>
        </Fragment>
      );
    }
  }

  export default Comment;