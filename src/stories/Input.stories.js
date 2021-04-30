import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from '../components/base';

storiesOf('Base/Input', module)
    .add('Playground', () => {
        return (
            <Input />
        )
    })