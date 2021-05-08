import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number, select } from '@storybook/addon-knobs';
import { Badge } from '../components/base';

storiesOf('Base/Badge', module)
.add('Playground', () => {
        const sizes = select('Size', ['xxs', 'sm', 'md', 'lg'], 'md');
        return (
            <Badge
                active={boolean('active', true)}
                amount={number('amount', 32)}
                size={sizes}
            >
                { text('label', 'Home') }
            </Badge>
        )
    })