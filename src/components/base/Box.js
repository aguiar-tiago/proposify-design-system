import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledBox = styled.div`
    display: flex;
    flex-direction: ${({flexDirection}) => flexDirection ? flexDirection : 'row'};
    flex-flow: ${({flexFlow}) => flexFlow ? flexFlow : 'flex-start'};
    justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'flex-start'};
    min-width: ${({minWidth}) => minWidth };
    max-width: ${({maxWidth}) => maxWidth };
    padding: ${({p}) => p};
    background-color: ${({bgColor}) => bgColor};
    margin-bottom: ${({mb}) => mb};
    margin-top: ${({mt}) => mt};
    margin-left: ${({ml}) => ml};
    margin-right: ${({mr}) => mr};
`;


const Box = (props) => {
    return ( 
        <StyledBox {...props}>
            {props.children}
        </StyledBox>
     );
}
 
Box.propTypes = {
    flexDirection: PropTypes.string,
    flexFlow: PropTypes.string,
    justifyContent: PropTypes.string,
    minWidth: PropTypes.string,
    maxWidth: PropTypes.string,
    padding: PropTypes.string,
    bgColr: PropTypes.string,
    mb: PropTypes.string,
    mt: PropTypes.string,
    ml: PropTypes.string,
    mr: PropTypes.string
}

export default Box; 