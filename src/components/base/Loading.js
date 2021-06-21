import React from 'react';
import styled, { withTheme } from 'styled-components';
import { StageSpinner } from 'react-spinners-kit';
import PropTypes from 'prop-types';


export const StyledLoading = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Loading = withTheme(({theme, children}) => {
    return (
        <StyledLoading>
            <StageSpinner color={theme.colors.primary} backColor="#eee" />
            {children}
        </StyledLoading>
    )
});

Loading.propTypes = {
    children: PropTypes.any
};

export default Loading;

export const Spinner = withTheme(({theme, ...props}) => {
    return <StageSpinner color={theme.colors.primary} {...props} backColor="#eee" />
})