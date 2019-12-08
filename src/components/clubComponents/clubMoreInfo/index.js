import React from "react";
import "./clubMoreInfo.css";
import "../../../fontawesome";

export default ({ club }) => {
  return (
    <div className="row">
      <div className="col-12">
        <ul className="specs">
          <li>
            <span>Players</span>
            <dl>
                <dt>Number of Players:</dt>
                <dd>{club.numberOfPlayers}</dd>
            </dl>
          </li>
          <li>
            <span>Manger</span>
            <dl>
              <dt>Name:</dt>
              <dd>{club.manager_name}</dd>
              <dt>Titles:</dt>
              <dd>{club.titlesWon}</dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  );
};