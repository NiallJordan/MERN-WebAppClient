import React, {Fragment} from "react";
import { withRouter } from "react-router-dom";
import ClubPublic from "../clubPublic/clubPublic";
import api from "../../../dataStore/stubAPI";
import ClubMoreInfo from "../clubMoreInfo/index";

const ClubPage = props => {
  const { id } = props.match.params;
  const club = api.find(id);
   return (
    <Fragment>
       {club ? (
         <Fragment>
           <ClubPublic club= {club}/>
           <ClubMoreInfo club={club}/>
        </Fragment>
       ):(
         <p>Waiting for club details</p>
       )}
    </Fragment>
  );
};

export default withRouter(ClubPage);