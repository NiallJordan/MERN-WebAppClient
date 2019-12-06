import React, {Component} from "react";
import "./club.css";
import "../../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Club extends Component{
    render(){
        return (
        <div className="col-sm-3">
            <div className="card">
            <img
                className="card-img-tag center "
                alt={this.props.club.name}
                src={this.props.club.picture.logo}
            />
            <div className="card-body">
                <h5 className="card-title ">
                    {`${this.props.club.name}`}
                </h5>
                <p key="league">
                <span> {this.props.club.league} </span>
                </p>
                <p key="placeInLeague">
                    <FontAwesomeIcon icon={["fas", "medal"]} />
                    <span> {this.props.club.placeInLeague}</span>
                </p>
            </div>
            <div className="card-footer">
                <div
                className="btn-group d-flex btn-group-justified"
                role="group"
                aria-label="..."
                >
                <button type="button" className={"btn btn-default w-100"}>
                    {" Edit "}
                </button>
                <button type="button" className={"btn btn-danger w-100"}>
                    {"Delete"}
                </button>
                </div>
            </div>
            </div>
        </div>
        );
    }
}
export default Club;