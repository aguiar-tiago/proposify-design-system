import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from "@storybook/addon-docs/blocks";
import { Emoji } from '../components/base/';


storiesOf('Base/Emoji-new', module)
    .add('Playground', () => {
        return (
            <Emoji symbol="😇"/>
        )
    })