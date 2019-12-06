import React, { Component } from "react";
import Header from "./components/header/";
import ClubList from "./components/clubComponents/clubList";
import FilterControls from "./components/filterControls/";
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    const sample = {
      name: 'Liverpool',
      picture: {logo:'./logo.png'},
      league: 'Premier League',
      placeInLeague: 1
    }

    const clubs = [sample, sample, sample, sample, sample];

    return (
      <div className="jumbotron">
        <Header noClubs={10} />
        <FilterControls />
        <ClubList clubs={clubs} />
      </div>
    );
  }
}

export default App;