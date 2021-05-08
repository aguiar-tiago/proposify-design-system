import React from 'react';
import styled from 'styled-components';

const StyledBadge = styled.div`
    background-color: ${props => props.active && props.theme.colors.info};
    font-family: ${props => props.theme.fonts.montserrat};
    color: ${props => props.active ? props.theme.colors.white : props.theme.colors.link};
    padding: 6px;
    border-radius: 3px;
    text-align: center;
    padding: 5px 15px;
    font-weight: bold;
    box-shadow: ${props => props.active && '1px 1px 1px 0 #bbb'};
    width: ${props => props.theme.buttonSizes[props.size]}

    span {
        background-color: ${props => props.active ? props.theme.colors.white : props.theme.colors.info};
        color: ${props => props.active ? props.theme.colors.info : props.theme.colors.white};
        margin-left: 3px;
        height: 26px;
        width: 26px;
        border: 1px solid #fff;
        padding: 7px 0;
        text-align: center;
        display: inline-block;
        min-width: 10px;
        font-size: 10.5px;
        font-weight: 500;
        line-height: 1;
        vertical-align: middle;
        white-space: nowrap;
        text-align: center;
        border-radius: 25px;
    }
`

const Badge = ({active = true, amount, children, size}) => (
    <StyledBadge active={active} size={size}>
        {children}
        {amount && <span>{amount}</span>}
    </StyledBadge>
)
 
export default Badge;