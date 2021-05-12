import React from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system'


const StyledTableHead = styled.th`
    padding: 10px;
    line-height: 1.52857143;
    ${ ({theme}) => variant(
        {
            prop: 'variant',
            variants: {
                primary: {
                    color: theme.colors.white,
                    background: theme.gradients.primary,
                },
                default: {
                    color: theme.colors.default,
                    background: theme.gradients.default,
                    bg: theme.colors.primary,
                },
                success: {
                    color: theme.colors.white,
                    background: theme.gradients.success,
                    bg: theme.colors.success,
                },
                info: {
                    color: theme.colors.white,
                    background: theme.gradients.info,
                    bg: theme.colors.info,
                },
                warning: {
                    color: theme.colors.white,
                    background: theme.gradients.warning,
                    bg: theme.colors.warning,
                },
                danger: {
                    color: theme.colors.white,
                    background: theme.gradients.lightDanger,
                    bg: theme.colors.lightDanger,
                },
                link: {
                    color: theme.colors.link,
                    background: theme.gradients.transparent,
                    bg: theme.colors.transparent,
                },
            },
        }
    )}
`

const TableHead = ({children, theme, variant}) => {
    return ( 
        <StyledTableHead theme={theme} variant={variant}>{children}</StyledTableHead>
     );
}
 
export default TableHead;