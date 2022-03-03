import styled from 'styled-components';
import React, {useContext} from 'react';
import {Navbar} from './navbar/navbar';
import {BtnChangeTheme} from '../header/changeTheme/changeTheme';


import {baseTheme} from '../theme/theme';

import { AppContext } from '../app/App';

const ComponentHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 10vh;
  background: ${ props => props.bg ? baseTheme.colors.bgDark : baseTheme.colors.bgLight};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${ props => props.brd ?
   baseTheme.borders.brdDark:
   baseTheme.borders.brdLight };
  padding: 0 5em;
  transition: all, .6s;
`

export function Header() {

  const {themeBgBoolean} = useContext(AppContext)

  return (
    /**
     * bg - background сайта
     * brd - border разделов {header, footer, main}
     */
    <ComponentHeader bg={themeBgBoolean.theme} brd={themeBgBoolean.theme}>
      <Navbar bg={themeBgBoolean.theme} />
      <BtnChangeTheme />
    </ComponentHeader>

  )
}
