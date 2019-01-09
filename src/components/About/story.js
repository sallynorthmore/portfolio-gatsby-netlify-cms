import React from 'react';
import { storiesOf } from '@storybook/react';
import About from './index';

const stories = storiesOf('About', module);

stories.add(
    'default',
    () => {
        return <About />;
    });
