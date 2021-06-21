import styled, { css } from 'styled-components';
import { variant } from 'styled-system'
import React from 'react';
import PropTypes from 'prop-types';


const StyledButton = styled.button`
    width: ${ (props) => props.theme.buttonSizes[props.size]};
    font-family: ${ (props) => props.theme.fonts.main};
    ${css({
        display: 'inline-block',
        marginBottom: '0',
        fontWeight: '600',
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
                success: {
                    color: theme.colors.white,
                    background: theme.gradients.success,
                    bg: theme.colors.success,
                    border: `1px solid ${theme.colors.success}`,
                },
                info: {
                    color: theme.colors.white,
                    background: theme.gradients.info,
                    bg: theme.colors.info,
                    border: `1px solid ${theme.colors.info}`,
                },
                warning: {
                    color: theme.colors.white,
                    background: theme.gradients.warning,
                    bg: theme.colors.warning,
                    border: `1px solid ${theme.colors.warning}`,
                },
                danger: {
                    color: theme.colors.white,
                    background: theme.gradients.danger,
                    bg: theme.colors.danger,
                    border: `1px solid ${theme.colors.danger}`,
                },
                link: {
                    color: theme.colors.link,
                    background: theme.gradients.transparent,
                    bg: theme.colors.transparent,
                    border: `1px solid ${theme.colors.transparent}`,
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

Button.propTypes = {
    onClick: PropTypes.func,
    theme: PropTypes.string,
    children: PropTypes.any.isRequired,
    variant: PropTypes.string,
    size: PropTypes.string
};

export default Button;