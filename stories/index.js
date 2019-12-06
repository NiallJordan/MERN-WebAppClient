import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../src/components/header';

import { action } from '@storybook/addon-actions';


storiesOf("Contact List App/Header", module).add("default", () => (
  <Header noClubs={10} />
));