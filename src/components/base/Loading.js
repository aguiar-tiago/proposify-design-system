import React from 'react';
import styled, { withTheme } from 'styled-components';
import { StageSpinner } from 'react-spinners-kit';


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

const Loading = withTheme(({theme, color, children}) => {
    return (
        <StyledLoading>
            <StageSpinner color={theme.colors.primary} backColor="#eee" />
            {children}
        </StyledLoading>
    )
});

export default Loading;

export const Spinner = withTheme(({theme, ...props}) => {
    return <StageSpinner color={theme.colors.primary} {...props} backColor="#eee" />
})