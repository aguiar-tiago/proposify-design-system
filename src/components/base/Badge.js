import styled from 'styled-components';

const Badge = styled.div`
    background-color: ${props => props.theme.colors.secondary};
    font-family: ${props => props.theme.fonts.montserrat};
    max-width: 100px;
    color: white;
    padding: 6px;
    border-radius: 2px;
    font-weight: bold;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.3);

`
 
export default Badge;