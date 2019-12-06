import React, { Component } from "react";
import Header from "./components/header/";
import ClubList from "./components/clubComponents/clubList";
import FilterControls from "./components/filterControls/";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import localCache from "./localCache";
import request from "superagent";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchText:""
    };
  }

  componentDidMount(){
    console.log("componentDidMount of Football App");
    request.get("http://localhost:3001/clubs").end((error, res) => {
      if (res) {
        let clubs = JSON.parse(res.text);
        localCache.populate(clubs);
        this.setState({});
      } else {
        console.log(error);
      }
    });
  }

  filterClubs = event => {
    event.preventDefault();
    this.setState({ searchText: event.target.value.toLowerCase() });
  };

  render() {
    let updatedList = localCache.getAll().filter(club => {
      let clubName = club.name.toLowerCase();
      return clubName.search(this.state.searchText) !== -1;
    });
    return (
      <div className="jumbotron">
        <Header noClubs={10} />
        <FilterControls  onChange={this.filterClubs} />
        <ClubList clubs={updatedList} />
      </div>
    );
  }
}

export default App;