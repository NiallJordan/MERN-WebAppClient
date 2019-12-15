import React, { Component, Fragment } from "react";
import Header from "./components/header/";
import ClubList from "./components/clubComponents/clubList";

import '../node_modules/bootstrap/dist/css/bootstrap.css';

import api from "./dataStore/stubAPI";
import _ from 'lodash';
import CommentList from "./components/commentComponents/commentList";
import CommentForm from "./components/commentComponents/commentForm";

class App extends Component {
  state = { search:"",league:"all"};

  handleChange = (type,value)=>{
    type === "name"
    ? this.setState({search : value})
    : this.setState({ league : value});
  };

  addClub = (name,logo,league,placeInLeague,phone,city,country,stadium_name,capacity,numberOfPlayers,yearEstablished,manager_name,titlesWon) => {
    api.add(name,logo,league,placeInLeague,phone,city,country,stadium_name,capacity,numberOfPlayers,yearEstablished,manager_name,titlesWon)
    this.setState({});
  };

  deleteClub =(key) => {
    api.delete(key);
    this.setState({});
  };


  //Comments
  addComment = (comment, name) => {
    api.addComment(comment, name);
    this.setState({});
  };

  incrementPoints = (commentId) => {
    api.upvoteComment(commentId) ;
    this.setState({});
};

decrementPoints = (commentId) => {
  api.downvoteComment(commentId) ;
  this.setState({});
};
  render() {
    let clubs = api.getAll();
    let filteredClubs = clubs.filter( c => {
      const name = `${c.name}`;
      return name.toLowerCase().search(this.state.search.toLowerCase()) !== -1;
    });
    filteredClubs = this.state.league === "all" ? filteredClubs : filteredClubs.filter(c => c.league === this.state.league);
    let sortedClubs = _.sortBy(filteredClubs,c => c.placeInLeague);

    let comments = api.getAllComments();
    let sortedComments = _.sortBy(comments, c => -c.points);
    return (
    <Fragment>
        <Header onUserInput={this.handleChange} noClubs={sortedClubs.length} />
        <div className="row">
          <div className="col-md-10">
            <p>Clubs</p>
          <ClubList clubs={sortedClubs} upvoteHandler={this.incrementUpvote} deleteHandler={this.deleteClub}/>
          </div>
          <div className="col-md-2">
            <p>Comments</p>
          <CommentList comments={sortedComments} upvoteHandler={this.incrementPoints} downvoteHandler={this.decrementPoints}/>
          <CommentForm handleAdd={this.addComment}/>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;