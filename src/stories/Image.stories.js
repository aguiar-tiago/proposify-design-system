import React from 'react';
import { storiesOf } from '@storybook/react';
import { ImageWrapper } from '../components/base';


storiesOf('Base/Image')
    .add('Playground', () => {
        return (
            <ImageWrapper>
                <img src="https://via.placeholder.com/150" alt="some text" />
            </ImageWrapper>
        )
    })