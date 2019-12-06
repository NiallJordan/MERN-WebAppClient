import React, { Component } from "react";
import Header from "./components/header/";
import ClubList from "./components/clubComponents/clubList";
import FilterControls from "./components/filterControls/";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import localCache from "./localCache";
import request from "superagent";
import api from "./dataStore/stubAPI";

class App extends Component {
  // state = {
  //   searchText:""
  // };

  componentDidMount() {
        request.get("https://randomuser.me/api/?results=50").end((error, res) => {
        if (res) {
            let { results: clubs } = JSON.parse(res.text);
            api.initialize(clubs);
            this.setState({});
        } else {
            console.log(error);
        }
        });
    }

  deleteClub =(key) => {
    api.delete(key);
    this.setState({});
  };

  render() {
    let clubs = api.getAll();
    return (
    <div className="jumbotron">
        <Header noClubs={clubs.length} />
        <FilterControls />
        <ClubList clubs={clubs} deleteHandler={this.deleteClub}/>
    </div>
    );
  }
}

export default App;