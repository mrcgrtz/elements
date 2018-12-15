import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, array, color } from '@storybook/addon-knobs';
import Logo from '../src/logo';

const stories = storiesOf('Logo', module);

stories.addDecorator(withKnobs);

stories.add('Logo', () => (
  <Logo
    title={text('Title', 'Marc Görtz')}
    url={text('URL', 'https://marcgoertz.de/')}
    urlRelations={array('Relation', ['start', 'me'], ' ')}
  />
));

stories.add('Logo with solid color', () => (
  <Logo
    title={text('Title', 'Marc Görtz')}
    url={text('URL', 'https://marcgoertz.de/')}
    urlRelations={array('Relation', ['start', 'me'], ' ')}
    solidColor={color('Color', '#bada55')}
  />
));
