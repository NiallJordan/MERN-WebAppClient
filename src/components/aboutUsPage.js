import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash'
import Header from './header';

class AboutUsPage extends Component{

    render(){
        return (
        <div>
            <Header/>
            <div className="container">
                <div className="row">
                   <h1>About</h1>
                   <div className="body col-md-12">
                       <p>This is a single page Web Application designed as part of an integrated Web App that includes a client side and back-end server side.</p>
                       <p>The app itself stores information on Football Clubs including their name, the league they play in, their position in that league
                           (which is updatebale as the season progresses) and their phone number. More information on the clubs can be found by clicking the image
                           on thier card. </p>
                       <h2>Features</h2>
                       <ul>
                           <li>Add a club</li>
                           <li>Edit an existing Club's information</li>
                           <li>Delete an existing</li>
                           <li>Comment Area for providing feedback on the clubs in the app and the app itslef</li>
                       </ul>
                   </div>
                </div>
            </div>
        </div>
        )
    }
}

export default withRouter(AboutUsPage);