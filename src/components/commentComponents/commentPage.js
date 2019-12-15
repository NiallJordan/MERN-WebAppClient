import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash'
import api from '../../dataStore/stubAPI';
import CommentList from './commentList'
import Form from './commentForm'

class CommentPage extends Component {
    addComment = (comment, name) => {
        let id =  this.getClubId()
        api.addComment(id,comment ,name );
        this.setState({});
    };

    incrementUpvote = (commentId) => {
        let id =  this.getClubId()
        api.upvoteComment(id,commentId) ;
        this.setState({});
    };

    getClubId = () => parseInt( this.props.match.params.id, 10);

    render() {
        let clubid = this.getClubId()
        let club = api.getClub(clubid);
        let line = club.phone?
            <a href={club.phone}>{club.name} </a> :
            <span>{club.name} </span> ;
        let comments = _.sortBy(club.comments,
                (comment) => - comment.upvotes
        );
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-md-offset-1">
                <h3>{line} </h3>
                <CommentList comments={comments}
                    upvoteHandler={this.incrementUpvote } />
                <Form club={club}  addCommentHandler={this.addComment} />
              </div>
            </div>
          </div>
        )
    }
}

export default withRouter(CommentPage);