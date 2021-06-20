import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ThemeProvider from './theme-provider';

const TestsProvider = ( { children } ) => {
    return (
        <ThemeProvider>
            { children }
        </ThemeProvider>
    )
}

TestsProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default memo(TestsProvider);