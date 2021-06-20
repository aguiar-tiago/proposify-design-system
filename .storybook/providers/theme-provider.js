import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components/macro';
import theme from '../../src/styles/theme';

//TODO: FIX FONT IMPORT
// import GlobalStyles from '../../src/styles/global';

const Provider = ({children}) => {
    return (
        <ThemeProvider theme={{...theme}}>
            {/* <GlobalStyles /> */}
            {children}
        </ThemeProvider>
    )
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default memo(Provider);