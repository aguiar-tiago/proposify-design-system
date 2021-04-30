import styled from 'styled-components';

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: transparent;
    width: 100%;
    max-width: 100%;
    height: 300px;
    margin-bottom: 20px;

    img {
        min-height: 300px;
        width: 100%;
    }
`
 
export default ImageWrapper;