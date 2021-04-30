import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { Badge } from '../components/base';

storiesOf('Base/Badge', module)
    .add('Playground', () => {
        return (
            <Badge>{text('label', '50% OFF')}</Badge>
        )
    })