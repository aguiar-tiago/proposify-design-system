import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';

const styles = css`
    margin: 0;
    font-size: ${props => props.fontSize ? `${props.fontSize}px` : '12px'};
    font-weight: ${props => props.fontWeight};
    text-align: ${props => props.textAlign};
    color: ${props => props.fontColor}
`

const Text = styled.p`
    ${styles}
`;

Text.propTypes = {
    fontSize: PropTypes.number,
    fontColor: PropTypes.string,
    fontWeight: PropTypes.string,
    textAlign: PropTypes.string,
}

export default Text;