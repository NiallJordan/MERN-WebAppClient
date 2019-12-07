import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MemoryRouter, Route } from "react-router";

import Header from '../src/components/header';
import Filter from '../src/components/filterControls';
import Club from '../src/components/clubComponents/club';
import ClubList from '../src/components/clubComponents/clubList';


const sample = {
  name: 'Liverpool',
  picture: {logo:'./logo.png'},
  league: 'Premier League',
  placeInLeague: 1,
  phone: '0151 906 1892',
  location:{
    city:"Liverpool",
    country:"England"
  },
  stadium:{
    name:"Anfield",
    capacity:54074
  },
  numberOfPlayers:37,
  yearEstablished: 1892,
  "login":{
    "uuid":"9813dc96-18f5-11ea-b8f0-2e728ce88125",
    "username":"liverpool-admin",
    "password":"sixTimes",
    "salt":"iLikeCake",
    "md5": "78671b38791a07d80315a2865c83ec3d",
    "sha1": "	b74353cd5155fad7cf5cb86913bc46964a7b1324",
    "sha256":"713bc71624de6b21c41d6806ea8addadf9d8ceb79e17b5d4bedb754a2c5a0140"

  },
  "dob":{
    "date": "1969-05-04",
    "age":"50"
  },
  "registered":{
    "date":"2017-12-7",
    "age":2
  }
}

//Header Story
storiesOf("Football Club App/Header", module).add("default", () => (
  <Header noClubs={10} />
));

//Filter Story
storiesOf("Football Club App/Filter Controls", module).add("default", () => (
  <Filter onUserInput={action('Search criteria changes')} />
));

storiesOf("Football Club App/Club", module).addDecorator(story => ( <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>))
.add("default", () => ( <Club club={sample} deleteHandler={action('Delete confirmed')}/>));

storiesOf("Football Club App/Club List", module).addDecorator(story => ( <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>))
.add("default", () => {
  const samples = [sample, sample, sample, sample, sample]
  return <ClubList clubs={samples}/>
});

