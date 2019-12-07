import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MemoryRouter, Route } from "react-router";

import Header from '../src/components/header';
import Filter from '../src/components/filterControls';
import Club from '../src/components/clubComponents/club';
import ClubList from '../src/components/clubComponents/clubList';
import ClubProfile from '../src/components/clubComponents/clubPublic/clubPublic';
import ClubMoreInfo from '../src/components/clubComponents/clubMoreInfo/index';


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
  manager:{
    name: "Jurgen Klopp",
    titlesWon :1
  },
  players:[
    {name:"Alisson Becker"},
    {name:"Virgil van Dijk"},
    {name:"Joe Gomez"},
    {name:"Andy Robertson"},
    {name:"Trente Alexander-Arnold"},
    {name:"Fabinho"},
    {name:"Gini Wijnaldum"},
    {name:"Jordan Henderson"},
    {name:"James Milner"},
    {name:"Sadio Mane"},
    {name:"Mo Salah"},
    {name:"Roberto Firmino"}
  ]
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

storiesOf("Football Club App/Club Page/Public Profile",module).add("default",() => ( 
  <ClubProfile club = {sample}/>
))

storiesOf("Football Club App/Club Page/More Details", module)
.add("default", () => (
   <ClubMoreInfo club = {sample}/>
));
