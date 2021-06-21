import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../typography';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { X } from '../icons';

const StyledAlert = styled.div`
    position: relative;
    padding: 20px;
    ${ ({theme}) => variant(
        {
            prop: 'variant',
            variants: {
                primary: {
                    color: theme.colors.white,
                    background: theme.gradients.primary,
                },
                default: {
                    color: theme.colors.default,
                    background: theme.gradients.default,
                    bg: theme.colors.primary,
                },
                success: {
                    color: theme.colors.white,
                    background: theme.gradients.success,
                    bg: theme.colors.success,
                },
                info: {
                    color: theme.colors.white,
                    background: theme.gradients.info,
                    bg: theme.colors.info,
                },
                warning: {
                    color: theme.colors.white,
                    background: theme.gradients.warning,
                    bg: theme.colors.warning,
                },
                danger: {
                    color: theme.colors.white,
                    background: theme.gradients.lightDanger,
                    bg: theme.colors.lightDanger,
                },
                link: {
                    color: theme.colors.link,
                    background: theme.gradients.transparent,
                    bg: theme.colors.transparent,
                },
            },
        }
    )}

    svg {
        max-width: 10px;
        position: absolute;
        right: 10px;
        top: 10px;
    }
`;



const Alert = ({theme, variant, children}) => {
    return (
        <>
            <StyledAlert theme={theme} variant={variant}>
                <X/>
                <Text>{children}</Text>
            </StyledAlert>
        </>
     );
};

Alert.propTypes = {
    variant: PropTypes.oneOf( [ 'default', 'primary', 'success', 'info', 'warning', 'danger', 'link' ] ),
    children: PropTypes.any
};

export default Alert;
