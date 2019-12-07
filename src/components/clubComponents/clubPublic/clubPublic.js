import React, { Fragment } from "react";
import { capitalize } from "../../../util";
import "../../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ club }) => {
  const location = capitalize(
    `${club.location.city}, ${club.location.country}`
  );
  const stadium = capitalize(
    ` ${club.stadium.name}, Capacity: ${club.stadium.capacity}`
  );
  const league = `${club.league}, Position: ${club.placeInLeague}`;
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
        <span> {club.phone}</span>
      </h4>
      
    </Fragment>
  );
};