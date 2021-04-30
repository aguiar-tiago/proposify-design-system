import styled from 'styled-components';

const Row = styled.div`
    width: 100%;
    height: auto;
    float: left;
    box-sizing: border-box;
    &:before, &:after {
        content: " ";
        display: table;
    }
`
 
export default Row;