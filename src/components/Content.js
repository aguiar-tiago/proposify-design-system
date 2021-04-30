import styled, {css} from 'styled-components';


const Content = styled.div`
    padding: 10px;
    border: 1px solid black;
    ${({bgColor}) => bgColor && css`
        background-color: ${bgColor};
    `}
`

export default Content;