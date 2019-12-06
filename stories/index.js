import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from '../src/components/header';
import Filter from '../src/components/filterControls';
import Club from '../src/components/clubComponents/club';

import { action } from '@storybook/addon-actions';

const sample = {
  name: 'Liverpool',
  picture: {logo:'./logo.png'},
  league: 'Premier League',
  placeInLeague: 1
}
//Header Story
storiesOf("Football Club App/Header", module).add("default", () => (
  <Header noClubs={10} />
));

//Filter Story
storiesOf("Football Club App/Filter Controls", module).add("default", () => (
  <Filter />
));

storiesOf("Football Club App/Club", module).add("default", () => (
  <Club club={sample}/>
));    