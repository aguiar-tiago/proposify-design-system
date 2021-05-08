import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';

const styles = css`
    margin: 0;
    font-size: ${props => props.fontSize ? `${props.fontSize}px` : '12px'};
    font-weight: ${props => props.fontWeight};
    text-align: ${props => props.textAlign};
    color: ${props => props.fontColor}
`

const HeadingOne = styled.h1`
    ${styles}
`;

const HeadingTwo = styled.h2`
    ${styles}
`;

const HeadingThree = styled.h3`
    ${styles}
`;

const HeadingFour = styled.h4`
    ${styles}
`;

const HeadingFive = styled.h5`
    ${styles}
`;

const HeadingSix = styled.h6`
    ${styles}
`;


HeadingOne.propTypes = {
    fontSize: PropTypes.number,
    fontColor: PropTypes.string,
    fontWeight: PropTypes.string,
    textAlign: PropTypes.string,
}

HeadingTwo.propTypes = {
    fontSize: PropTypes.number,
    fontColor: PropTypes.string,
    fontWeight: PropTypes.string,
    textAlign: PropTypes.string,
}

HeadingThree.propTypes = {
    fontSize: PropTypes.number,
    fontColor: PropTypes.string,
    fontWeight: PropTypes.string,
    textAlign: PropTypes.string,
}

HeadingFour.propTypes = {
    fontSize: PropTypes.number,
    fontColor: PropTypes.string,
    fontWeight: PropTypes.string,
    textAlign: PropTypes.string,
}

HeadingFive.propTypes = {
    fontSize: PropTypes.number,
    fontColor: PropTypes.string,
    fontWeight: PropTypes.string,
    textAlign: PropTypes.string,
}

HeadingSix.propTypes = {
    fontSize: PropTypes.number,
    fontColor: PropTypes.string,
    fontWeight: PropTypes.string,
    textAlign: PropTypes.string,
}

export { HeadingOne, HeadingTwo, HeadingThree, HeadingFour, HeadingFive, HeadingSix };
