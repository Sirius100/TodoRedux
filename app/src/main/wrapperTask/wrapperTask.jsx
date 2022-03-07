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

  const [tasks, dispatchAdd] = useReducer(reducer, [])
  const [AddTask, dispatchTask] = useReducer(reducer, {visibleForm:false})
  /**
   * idChangeTask хранит id задачи которая редактируется
   */
  const [idChangeTask, dispatchId] = useReducer(reducer, '');
  const [id , setId] = useState('');
  /**
   * newText хранит текст введенной user-ом новой задачи
   */
  const [newText, setNewText] = useState('');

  // themeBgBoolean отвечает за цветовую тему приложения
  const {themeBgBoolean} = useContext(AppContext)

  //при onDoubleClick меняет значение на true и передается в компонент FormChangeTask для визуал-ии формы
  const [modeVisible, setmodeVisible] = useState(false);

  /**
   * отвечает за показ формы для редактирования задачи
   */
  const userChangeTaskFormVisibleMode = ()=> {
    setmodeVisible(!modeVisible);
    setId(idChangeTask);
    console.log("idChangeTask: ", id);
    }

  // изменяю задачу
  const changeTextTaskSaveClick = () =>{
    setmodeVisible(!modeVisible);
    console.log("idChangeTask changeTextTaskSaveClick: ", idChangeTask);
    dispatchAdd({type:'chahgeTask', payload:{id:idChangeTask, text:newText, time: new Date(),}})
  }

  //получаю текст задачи из textarrea компонента FormChangeTask
  const newTextTask = (e,)=>{
    setNewText(e.target.value); //собрал текст задачи
  }

  return (

    <forChangeTextTask.Provider value={{userChangeTaskFormVisibleMode, dispatchId, newText, idChangeTask}}>
      <Wrapper brd={themeBgBoolean.theme}>
        <AddButton dispatchTask={dispatchTask}/>
        <ClistTask mode={AddTask} closeDispatchTask={dispatchTask} tasks={tasks} dispatchAdd={dispatchAdd}  />
        <FormChangeTask props={{modeVisible, userChangeTaskFormVisibleMode, changeTextTaskSaveClick, newTextTask}}  />
      </Wrapper>
    </forChangeTextTask.Provider>



  )
}
