import React from 'react';
import { storiesOf } from '@storybook/react';
import AnimatedText from './index';

const stories = storiesOf('AnimatedText', module);

stories.add(
    'default',
    () => {
        return <AnimatedText />;
    });
