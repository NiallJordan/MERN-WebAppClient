import React, { Component, Fragment } from "react";
import Header from "./components/header/";
import ClubList from "./components/clubComponents/clubList";
import FilterControls from "./components/filterControls/";
import ClubForm from "./components/clubComponents/clubForm";
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import api from "./dataStore/stubAPI";
import _ from 'lodash';

class App extends Component {
  state = { search:"",league:"all"};

  handleChange = (type,value)=>{
    type === "name" 
    ? this.setState({search : value}) 
    : this.setState({ league : value});
  };

  deleteClub =(key) => {
    api.delete(key);
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
    return (
    <Fragment>
        <Header noClubs={sortedClubs.length} />
        <FilterControls onUserInput={this.handleChange}/>
        <div className="row">
          <div className="col-md-2">
          <ClubForm />
          </div>
          <div className="col-md-10">
          <ClubList clubs={sortedClubs} deleteHandler={this.deleteClub}/>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;