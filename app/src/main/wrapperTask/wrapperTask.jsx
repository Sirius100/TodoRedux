import React, {useReducer, useContext} from 'react';
import reducer from '../../reducer/reducer';
import {AddButton} from './addButton';
import { ClistTask } from '../listTask/clistTask';
import { FormChangeTask } from './formChangeTask';
import styled from 'styled-components'
import {AppContext} from '../../app/App';
import { baseTheme } from '../../theme/theme';
import { useState } from 'react';

const Wrapper = styled.div`
  width: 98%;
  height: 98%;
  margin-left: auto;
  margin-right: auto;
  border-width: 1px;
  border-style: solid;
  border-color: ${ props => props.brd ?
   baseTheme.borders.brdDark:
   baseTheme.borders.brdLight };
  padding-top: 1em;
  transition: all, .9s;
  overflow-y: scroll;
`

/**forChangeTextTask используется
 *для передачи коллбека в компонент panelTask
*/

export const forChangeTextTask = React.createContext();

export const WrapperTask =() => {

  const [AddTask, dispatchTask] = useReducer(reducer, {visibleForm:false})
  const {themeBgBoolean} = useContext(AppContext)
  //при onDoubleClick меняет зачение на true и передается в компонент FormChangeTask для визуал-ии формы
  const [modeVisible, setmodeVisible] = useState(false);
  const userChangeTask = ()=> {
    setmodeVisible(!modeVisible);
    console.log("userChangeTask run modeVisible: ", modeVisible);};

  return (

    <forChangeTextTask.Provider value={userChangeTask}>
      <Wrapper brd={themeBgBoolean.theme}>
        <AddButton dispatchTask={dispatchTask}/>
        <ClistTask mode={AddTask} closeDispatchTask={dispatchTask} />
        <FormChangeTask props={{modeVisible, userChangeTask}}  />
      </Wrapper>
    </forChangeTextTask.Provider>



  )
}
