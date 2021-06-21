import React from 'react';
import PropTypes from 'prop-types';

const Emoji = ({symbol, label}) => {
    return ( 
        <span 
            role="img"
            aria-label={label ? label : ''}
            aria-hidden={label ? "false" : "true"}
        >
            {symbol}
        </span>
     );
}

Emoji.propTypes = {
    label: PropTypes.string,
    symbol: PropTypes.string,
};
 
export default Emoji;