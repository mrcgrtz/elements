import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import Button from '..';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add('Button', () => (
  <Button
    type={select('Type', ['button', 'submit', 'reset'], 'button')}
    disabled={boolean('Disabled', false)}
  >
    {text('Content', 'Lorem ipsum')}
  </Button>
));
