import styled from 'styled-components';
import {theme} from 'theme'
import { NavLink } from 'react-router-dom';

export const ButtonBurger = styled(NavLink)`
padding: 8px 37px;
    border: 2px solid #f59256;
    border-radius: ${theme.radii.normal};
    background-color: ${theme.colors.accent};
    font-size: ${theme.fontSizes[1]}px;
    font-weight: ${theme.fontWeights.medium};
    font-family: ${theme.fonts.manrope};
    font-style: normal;
    line-height: 19px;
    letter-spacing: 0.04em;
    text-decoration: none;
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    `


export const Button = styled(NavLink)`
display: none;
padding: 8px 37px;
    border: 2px solid #f59256;
    border-radius: ${theme.radii.normal};
    background-color: ${theme.colors.accent};
    font-size: ${theme.fontSizes[1]}px;
    font-weight: ${theme.fontWeights.medium};
    font-family: ${theme.fonts.manrope};
    font-style: normal;
    line-height: 19px;
    letter-spacing: 0.04em;
    text-decoration: none;
    color: ${theme.colors.white};
    align-items: center;
    margin-right: 20px;

    ${theme.mq.tablet} {
        display: flex;

}

 ${theme.mq.desktop} {
    margin-right: 0px;
    
}
`

// ${theme.mq.tablet} {

// }

// ${theme.mq.desktop} {
    
// }