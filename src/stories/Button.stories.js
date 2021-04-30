import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { Button } from '../components/base';

storiesOf('Base/Button', module)
    .add('Playground', () => {
        return (
            <Button 
                label="This is a button"
                onClick={() => {}}
                variant="primary"
            />
        )
    })