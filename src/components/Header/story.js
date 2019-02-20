import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './index';

const stories = storiesOf('Header', module);

stories.add(
    'default',
    () => {
        return <Header />;
    });
