import React from 'react';
import { storiesOf } from '@storybook/react';
import Story from './index';

const stories = storiesOf('Story', module);

stories.add(
    'default',
    () => {
        return <Story />;
    });
