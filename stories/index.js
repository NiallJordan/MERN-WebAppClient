import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MemoryRouter, Route } from "react-router";

import Header from '../src/components/header';
import Filter from '../src/components/filterControls';
import Club from '../src/components/clubComponents/club';
import ClubList from '../src/components/clubComponents/clubList';
import ClubPublic from '../src/components/clubComponents/clubPublic/clubPublic';
import ClubMoreInfo from '../src/components/clubComponents/clubMoreInfo/index';
import ClubProfile from '../src/components/clubComponents/clubPublic/index';
import ClubForm from '../src/components/clubComponents/clubForm/index';

import CommentForm from "../src/components/commentComponents/commentForm";
import Comment from "../src/components/commentComponents/comment";
import CommentList from "../src/components/commentComponents/commentList";

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
};


const comment = {
  id: 1,
  name: "Joe Bloggs",
  comment: "I agree with .....",
  upvotes: 10
};


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

storiesOf("Football Club App/Club Page/Public Profile",module)
.add("default",() => (
  <ClubPublic club = {sample}/>
));

storiesOf("Football Club App/Club Page/More Details", module)
.add("default", () => (
   <ClubMoreInfo club = {sample}/>
));

storiesOf("Football Club App/Club Page/Club Profile",module).addDecorator(story => (<MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>))
.add("default", () => (
  <ClubProfile club = {sample}/>
));

storiesOf("Football Club App/Club Form", module).add("default", () => <ClubForm addHandler={action('Add confirmed')}/>);



storiesOf("Football Club App/Comment page/Comment Form", module).add("default", () => (
  <CommentForm club={sample} addCommentHandler={action("comment added")} />
));



storiesOf("Football Club App/Comment page/Comment", module).add("default", () => (
  <Comment upvoteHandler={action("upvoted")} comment={comment} />
));

storiesOf("Football Club App/Comment page/Comment list", module).add("default", () => {
  const defaultComments = [
    comment,
    { ...comment, name: "Jane Smith", upvotes: 3, id: 2 },
    { ...comment, comment: "On the other hand", id: 3 },
    { ...comment, name: "Jill Dwyer", upvotes: 5, id: 4 }
  ];
  return (
    <CommentList upvoteHandler={action("upvoted")} comments={defaultComments} />
  );
});