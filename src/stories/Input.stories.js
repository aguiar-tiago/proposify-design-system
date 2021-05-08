import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from '../components/base';
import { text } from '@storybook/addon-knobs';


storiesOf('Base/Input', module)
    .add('Playground', () => {
        return (
            <Input label={text('Label', 'Input Label')}/>
        )
    })