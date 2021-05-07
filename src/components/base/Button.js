import styled from 'styled-components';
import { variant } from 'styled-system'
import React from 'react';

const StyledButton = styled.button`
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 8px 30px 8px;
    font-size: 16px;
    line-height: 1.375;
    border-radius: 3px;
    user-select: none;
    ${ ({theme}) => variant({
        variants: {
            primary: {
                color: theme.colors.white,
                background: theme.gradients.primary,
                border: `1px solid ${theme.colors.primary}`,
            },
            default: {
                color: theme.colors.default,
                background: theme.gradients.default,
                bg: theme.colors.primary,
                border: `1px solid ${theme.colors.default}`,
            },
        }
    })}
`;

const Button = ({ onClick, theme, children, variant}) => {
    return (
        <StyledButton
            onClick={onClick} 
            theme={theme} 
            variant={variant}>
            { children }
        </StyledButton>
    )
}

export default Button;