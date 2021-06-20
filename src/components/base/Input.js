import React from 'react';
import styled from 'styled-components/macro';

const InputWrapper = styled.div`
    height: 48px;
    width: 100%;
    position: relative;
    margin: 0 auto;

    label {
        display: inline-block;
        max-width: 100%;
        margin-bottom: 5px;
        font-size: 14px;
        color: ${props => props.theme.colors.default}
    }

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
    display: block;
    width: 100%;
    height: 40px;
    padding: 8.3333336px 14px;
    font-size: 16px;
    line-height: 1.3333333;
    background-color: ${props => props.theme.colors.white};
    background-image: none;
    border: 1px solid #bbbbbb;
    border-radius: 3px;
    -webkit-box-shadow: inset 0 1px 3px -1px #aaa;
    box-shadow: inset 0 1px 3px -1px #aaa;
    -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    color: ${props => props.theme.colors.text};
    &::placeholder {
        color: gray;
        font-family: ${props => props.theme.fonts.main}
    }
`;

const Input = (props) => (
    <InputWrapper>
        {props.label && 
            <label htmlFor={props.id}>{props.label}</label>
        }
        <StyledInput {...props}/>
    </InputWrapper>
)

export default Input;