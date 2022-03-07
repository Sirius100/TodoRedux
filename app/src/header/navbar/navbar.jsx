import React from "react";
import { Link } from "react-router-dom";

import styled from 'styled-components';
import {baseTheme} from '../../theme/theme';
import './navbar.css';

const StyleNavbar = styled.div`
  width: 180px;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`
const StyleLink = styled.div`
  text-decoration: none;
  display: inline-block;
  padding: 0.5em 0.9em;
  background: ${ props => props.bg ?  baseTheme.bgBtn.bgDark:
   baseTheme.bgBtn.bgLight};
  border-radius: 15%;
  width: 70px;
  height: 100%;
`
const SLink = styled(Link)`
  color: ${props => props.bg ?
    baseTheme.colorFont.thmLight:
    baseTheme.colorFont.thmDark};
  text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #464451, 0 0 30px #464451, 0 0 40px #464451, 0 0 55px #464451, 0 0 75px #464451;
`


/**
 * bg - props отвечает за backround and color {type=boolean}
 */
export const Navbar = React.memo( ({bg}) => {
  return (
    <StyleNavbar bg={bg}>
      <ul className="styleNavbar-ul">

        <StyleLink bg={bg} >
          <SLink className="routeLink" to="/">Home</SLink>
        </StyleLink>

        &nbsp;

        <StyleLink bg={bg} >
          <SLink className="routeLink" to="Todo">Todo</SLink>
        </StyleLink>

      </ul>
    </StyleNavbar>
  )
} )
