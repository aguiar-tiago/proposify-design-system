import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from "@storybook/addon-docs/blocks";
import { Text } from '../components/base/';


storiesOf('Base/Text', module)
    .add('Playground', () => {
        return (
            <Text>Hi</Text>
        )
    })