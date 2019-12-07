import React from "react";
import "./clubMoreInfo.css";
import "../../../fontawesome";

export default ({ club }) => {
const players = `${club.players}`.toString();
  return (
    <div className="row">
      <div className="col-12">
        <ul className="specs">
          <li>
            <span>Players</span>
            <dl>
                <dt>Number of Players:</dt>
                <dd>{club.numberOfPlayers}</dd>
              <dt>First Team:</dt>
              <dd>{players}</dd>
            </dl>
          </li>
          <li>
            <span>Manger</span>
            <dl>
              <dt>Name:</dt>
              <dd>{club.manager.name}</dd>
              <dt>Titles:</dt>
              <dd>{club.manager.titlesWon}</dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  );
};