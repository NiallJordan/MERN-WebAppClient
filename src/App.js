import React, { Component } from "react";
import Header from "./components/header/";
import ClubList from "./components/clubComponents/clubList";
import FilterControls from "./components/filterControls/";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import localCache from "./localCache";
import request from "superagent";
import api from "./dataStore/stubAPI";
import _ from 'lodash';

class App extends Component {
  state = { search:"",gender:"all"};

  handleChange = (type,value)=>{
    type === "name" ? this.setState({search : value}): this.setState({ league : value});
  };

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
    let filteredClubs = clubs.filter( c => {
      const name = `${c.name}`;
      return name.toLowerCase().search(this.state.search.toLowerCase()) !== -1;
    });
    filteredClubs = this.state.league === "all" ? filteredClubs : filteredClubs.filter(c => c.league === this.state.league);
    let sortedClubs = _.sortBy(filteredClubs,c => c.name);
    return (
    <div className="jumbotron">
        <Header noClubs={sortedClubs.length} />
        <FilterControls onUserInput={this.handleChange}/>
        <ClubList clubs={sortedClubs} deleteHandler={this.deleteClub}/>
    </div>
    );
  }
}

export default App;