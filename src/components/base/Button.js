import styled, { css } from 'styled-components';
import { variant } from 'styled-system'
import React from 'react';

const StyledButton = styled.button`
    width: ${ (props) => props.theme.buttonSizes[props.size]};
    ${css({
        display: 'inline-block',
        marginBottom: '0',
        fontWeight: 'normal',
        textAlign: 'center',
        verticalAlign: 'middle',
        touchAction: 'manipulation',
        cursor: 'pointer',
        backgroundImage: 'none',
        border: '1px solid transparent',
        whiteSpace: 'nowrap',
        padding: '8px 30px 8px',
        fontSize: '16px',
        lineHeight: '1.375',
        borderRadius: '3px',
        userSelect: 'none',
    })}
    ${ ({theme}) => variant(
        {
            prop: 'variant',
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
            },
        }
    )}
`;

const Button = ({ onClick, theme, children, variant, size}) => {
    return (
        <StyledButton
            onClick={onClick} 
            theme={theme} 
            size={size}
            variant={variant}>
            { children }
        </StyledButton>
    )
}

export default Button;