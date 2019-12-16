import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./header.css";
import api from '../../dataStore/stubAPI';
import _ from "lodash";

export default class Header extends Component {
  
  handleChange = (e,type,value) => {
    e.preventDefault();
    this.props.onUserInput(type,value);
  };

  handleTextChange = e =>{
    this.handleChange(e,"name",e.target.value);
  };

  handleLeagueChange = e => {
    this.handleChange(e,"league",e.target.value);
  };

  render() {

    return (
      <Navbar fixed="top" bg="dark" expand="lg" variant="dark">
        <Navbar.Brand className="nav-bar " href="/">Football Club List  <span className="badge badge-pill badge-success">{this.props.noClubs}</span> </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/clubForm">Add a Club</Nav.Link>
              <Nav.Link href="/aboutPage">About Us</Nav.Link>
              <Form inline>
                <FormControl type="text" placeholder="Name Search" className="mr-sm-2" onChange={this.handleTextChange}/>
              </Form>
              <span> League: </span>
              <select id="league" onChange={this.handleLeagueChange}>
                <option value="all">All</option>
                <option value="Premier League">Premier League</option>
                <option value="Serie A">Serie A</option>
              </select>
            </Nav>
        </Navbar>
    );
  }
}
