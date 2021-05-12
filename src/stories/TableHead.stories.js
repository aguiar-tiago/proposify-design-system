import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { TableHead } from '../components/complex';


storiesOf('Base/TableHead', module)
    .addDecorator(withKnobs)
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
        
        const label = text('Label', 'Title');

        return (
            <thead>
                <tr>
                    <TableHead
                        variant={variants}
                    >
                        {label}
                    </TableHead>
                    <TableHead
                        variant={variants}
                    >
                        {label}
                    </TableHead>
                    <TableHead
                        variant={variants}
                    >
                        {label}
                    </TableHead>
                    <TableHead
                        variant={variants}
                    >
                        {label}
                    </TableHead>
                </tr>
            </thead>
        )
    })
