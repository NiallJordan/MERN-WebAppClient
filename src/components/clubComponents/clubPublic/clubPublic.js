import React, { Fragment } from "react";
import { capitalize } from "../../../util";
import "../../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ user }) => {
  const location = capitalize(
    `${user.location.city}, ${user.location.country}`
  );
  const stadium = capitalize(
    ` ${user.stadium.name}, ${user.stadium.capacity}`
  );
  const league = `${user.league}, Position: ${user.placeInLeague}`;
  return (
    <Fragment>
      <h4>
        <FontAwesomeIcon icon={["fas", "home"]} />
        <span> {location}</span>
      </h4>
      <h4>
        <FontAwesomeIcon icon={["fas", "users"]} />
        <span>{stadium}</span>
      </h4>
      <h4>
        <FontAwesomeIcon icon={["fas", "futbol"]} />
        <span> {league}</span>
      </h4>
      <h4>
        <FontAwesomeIcon icon={["fas", "phone"]} />
        <span> {user.phone}</span>
      </h4>
      
    </Fragment>
  );
};