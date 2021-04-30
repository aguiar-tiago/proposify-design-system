import styled from 'styled-components';



function getGridWidth(value) {
    if(!value) return;
    let width = value / 12 * 100;
    return `width: ${width}%`;
}


const Col = styled.div`
    float: left;
    padding: .25rem;
    min-height: 1px;
    width: 100%;
    box-sizing: border-box;
    @media only screen and (max-width: 425px) {
        ${({mobile}) => mobile && getGridWidth(mobile)}
    }
    @media only screen and (min-width: 500px) and (max-width: 770px) {
        ${({tablet}) => tablet && getGridWidth(tablet)}
    }
    @media only screen and (min-width: 770px) {
        ${({desktop}) => desktop && getGridWidth(desktop)}
    }
`
 
export default Col;