import React from 'react';
import styled from 'styled-components/macro';
import Emoji from '../base/Emoji';

const InputWrapper = styled.div`
    height: 48px;
    width: 100%;
    position: relative;
    margin: 0 auto;

    span {
        position: absolute;
        top: 50%;
        left: 24px;
        transform: translateY(-50%);
        z-index: 10;
        width: 16px;
        height: 28px;
        font-size: 22px;
    }
`;


const StyledInput = styled.input`
    height: 48px;
    width: 100%;
    padding: 0 64px;
    border-radius: 100px;
    border: none;
    font-size: 14px;
    outline: none;
    color: ${props => props.theme.colors.text};
    &::placeholder {
        color: gray;
        font-family: ${props => props.theme.fonts.montserrat}
    }
`

const Input = (props) => (
    <InputWrapper>
        <Emoji symbol="🔎" label="search" />
        <StyledInput {...props}/>
    </InputWrapper>
)

export default Input;