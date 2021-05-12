import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import { Alert } from '../components/complex';

storiesOf('Base/Alert', module)
.add('Playground', () => {
        const variants = select('Variant', {
            Default: 'default',
            Primary: 'primary',
            Success: 'success',
            Info: 'info',
            Warning: 'warning',
            Danger: 'danger',
            Link: 'link',
        }, 'primary');
        return (
            <Alert variant={variants}>
                { text('label', 'Best check yo self, you are not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.') }
            </Alert>
        )
    })