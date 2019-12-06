import React, { Component } from "react";
import Header from "./components/header/";
import ClubList from "./components/clubComponents/clubList";
import FilterControls from "./components/filterControls/";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import localCache from "./localCache";
import request from "superagent";
import api from "./dataStore/stubAPI";

class App extends Component {
  state = {
    searchText:""
  };

  componentDidMount(){
    console.log("componentDidMount of Football App");
    request.get("http://localhost:3001/clubs").end((error, res) => {
      if (res) {
        let clubs = JSON.parse(res.text);
        localCache.populate(clubs);
        api.initialize(clubs);
        this.setState({});
      } else {
        console.log(error);
      }
    });
  }

  filterClubs = text => this.setState({searchText: text});

  render() {
    //let clubs = api.getAll();
    let updatedList = localCache.getAll().filter(club =>
      club.name.toLowerCase().search(this.state.searchText) !== -1
    );
    return (
      <div className="jumbotron">
        <Header noClubs={updatedList.length} />
        <FilterControls  handleChange={this.filterClubs} />
        <ClubList clubs={updatedList} />
      </div>
    );
  }
}

export default App;