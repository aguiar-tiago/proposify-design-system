import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';

const styles = css`
    margin: 0;
    font-size: ${ ({fontSize})=> fontSize ? `${fontSize}px` : '12px'};
    font-weight: ${ ({fontWeight})=> fontWeight};
    text-align: ${ ({textAlign})=> textAlign};
    color: ${ ({emphasis, theme})=> emphasis && theme.colors[emphasis]}
`

const Text = styled.p`
    ${styles}
`;

Text.propTypes = {
    fontSize: PropTypes.number,
    emphasis: PropTypes.string,
    fontWeight: PropTypes.string,
    textAlign: PropTypes.string,
}

export default Text;