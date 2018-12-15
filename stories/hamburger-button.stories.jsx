import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import HamburgerButton from '../src/hamburger-button';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add('Hamburger Button', () => (
  <HamburgerButton
    label={text('Label', 'Menü anzeigen')}
    labelActive={text('Active label', 'Menü ausblenden')}
    position={{ top: '20px', left: '20px' }}
  />
));
