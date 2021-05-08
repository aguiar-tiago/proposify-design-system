import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, select, text } from '@storybook/addon-knobs';
import { 
    Text, 
    HeadingOne, 
    HeadingTwo, 
    HeadingThree, 
    HeadingFour, 
    HeadingFive, 
    HeadingSix 
} from '../components/typography/';


storiesOf('Base/Typography', module)
    .add('Paragraph', () => {
        return (
            <Text
                fontSize={number('Font Size', 14)}
                fontWeight={number('Font Weight', 500)}
                textAlign={select('Text Align', ['left', 'center', 'right'] )}
            >
                {text('Text', 'Love is a fire that burns unseen, a wound that aches yet is not felt, an always discontent contentment, a pain that rages without hurting,')}

            </Text>
        )
    })
    .add('Heading One', () => {
        return (
            <HeadingOne
                fontSize={number('Font Size', 30)}
                fontWeight={number('Font Weight', 500)}
                textAlign={select('Text Align', ['left', 'center', 'right'] )}
            >
                {text('Text', 'Love is a fire that burns unseen, a wound that aches yet is not felt, an always discontent contentment, a pain that rages without hurting,')}

            </HeadingOne>
        )
    })
    .add('Heading Two', () => {
        return (
            <HeadingTwo
                fontSize={number('Font Size', 24)}
                fontWeight={number('Font Weight', 500)}
                textAlign={select('Text Align', ['left', 'center', 'right'] )}
            >
                {text('Text', 'Love is a fire that burns unseen, a wound that aches yet is not felt, an always discontent contentment, a pain that rages without hurting,')}

            </HeadingTwo>
        )
    })
    .add('Heading Three', () => {
        return (
            <HeadingThree
                fontSize={number('Font Size', 22)}
                fontWeight={number('Font Weight', 500)}
                textAlign={select('Text Align', ['left', 'center', 'right'] )}
            >
                {text('Text', 'Love is a fire that burns unseen, a wound that aches yet is not felt, an always discontent contentment, a pain that rages without hurting,')}

            </HeadingThree>
        )
    })
    .add('Heading Four', () => {
        return (
            <HeadingFour
                fontSize={number('Font Size', 20)}
                fontWeight={number('Font Weight', 500)}
                textAlign={select('Text Align', ['left', 'center', 'right'] )}
            >
                {text('Text', 'Love is a fire that burns unseen, a wound that aches yet is not felt, an always discontent contentment, a pain that rages without hurting,')}

            </HeadingFour>
        )
    })
    .add('Heading Five', () => {
        return (
            <HeadingFive
                fontSize={number('Font Size', 18)}
                fontWeight={number('Font Weight', 500)}
                textAlign={select('Text Align', ['left', 'center', 'right'] )}
            >
                {text('Text', 'Love is a fire that burns unseen, a wound that aches yet is not felt, an always discontent contentment, a pain that rages without hurting,')}

            </HeadingFive>
        )
    })
    .add('Heading Six', () => {
        return (
            <HeadingSix
                fontSize={number('Font Size', 16)}
                fontWeight={number('Font Weight', 700)}
                textAlign={select('Text Align', ['left', 'center', 'right'] )}
            >
                {text('Text', 'Love is a fire that burns unseen, a wound that aches yet is not felt, an always discontent contentment, a pain that rages without hurting,')}

            </HeadingSix>
        )
    })