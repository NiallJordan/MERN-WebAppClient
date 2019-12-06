import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../src/components/header';
import Filter from '../src/components/filterControls';
import { action } from '@storybook/addon-actions';


//Header Story
storiesOf("Contact List App/Header", module).add("default", () => (
  <Header noClubs={10} />
));

//Filter Story
storiesOf("Contact List App/Filter Controls", module).add("default", () => (
  <Filter />
));