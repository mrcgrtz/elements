import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, date } from '@storybook/addon-knobs';
import DateTime from '..';

const stories = storiesOf('Date and Time', module);

stories.addDecorator(withKnobs);

stories.add('Date and Time', () => <DateTime dateTime={date('Date')} />);
