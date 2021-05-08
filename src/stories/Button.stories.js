import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, withKnobs } from '@storybook/addon-knobs';
import { Button } from '../components/base';


storiesOf('Base/Button', module)
    .addDecorator(withKnobs)
    .add('Playground', () => {

        const variants = select('Variant', {
            Default: 'default',
            Primary: 'primary',
        }, 'primary');
        
        const label = text('Label', 'Button');

        const sizes = select('Size', ['xxs', 'sm', 'md', 'lg'], 'md');

        return (
            <Button
                onClick={() => {}}
                variant={variants}
                size={sizes}
            >
                {label}
            </Button>
        )
    })