import styled from 'styled-components'
import React, {useContext} from 'react';
import { Routes, Route } from "react-router-dom";
import {baseTheme} from '../theme/theme';
import { AppContext } from '../app/App';
import { WrapperTask } from './wrapperTask/wrapperTask';
import { Home } from './home/home';

const ComponentMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80vh;
  background: ${ props => props.bg ?
   baseTheme.colors.bgDark:
   baseTheme.colors.bgLight};
  text-align: center;
  transition: all, .9s;

`

export const Main = () =>  {

  const {themeBgBoolean} = useContext(AppContext)
  return (
    <ComponentMain bg={themeBgBoolean.theme} brd={themeBgBoolean}>
      <Routes>

        <Route path="/" element={<Home textColor={themeBgBoolean.theme}/>} />

        <Route path="Todo" element={<WrapperTask themeBgBoolean={themeBgBoolean}/>} />

      </Routes>

    </ComponentMain>

  )
}
