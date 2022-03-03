import React from 'react';
import styled from 'styled-components';
import {baseTheme} from '../../theme/theme';

const StyleHome = styled.div`
  color: ${props => props.textColor ?
    baseTheme.colors.bgLight:
    baseTheme.colors.bgDark};
  font-size: 2em;
`
export const Home = React.memo( ({textColor}) => {
  return(

    <StyleHome textColor={textColor}>
      <section>
        <h1>Проект Todo</h1>
        <hr />
        <p>
          Этот проект создан с использование библиотек react, react-router, react-bootstrap, redux, styled-companent!
        </p>
      </section>
    </StyleHome>

  )
})
