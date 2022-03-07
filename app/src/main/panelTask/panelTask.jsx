import React from 'react';
import {useRef, useContext} from 'react';
import styled from 'styled-components';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Fade from 'react-bootstrap/Fade'
import {Trash} from './trash';
import  {forChangeTextTask} from '../wrapperTask/wrapperTask';
import './panelTask.css';

const Task = styled(ListGroup.Item)`
  position: relative;
  background: ${ props => props.isComplete? "hsla(190, 73%, 71%, 1);": "white"};
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  transition: all 1s;
`

export const PanelTask = React.memo(({task, dispatchTask}) => {
  const {userChangeTaskFormVisibleMode, dispatchId, idChangeTask} = useContext(forChangeTextTask);
  const textTaskDivRef = useRef(); // если будет текст задачи менятся из state то удалить переменную
  const idChangeTest = useRef();
  const day = {0:"Вск", 1:"Пн", 2:"Вт", 3:"Ср", 4:"Чт", 5:"Пт", 6:"Сб"};

  // отмечаю задачу выполненой
  const readyTask = ()=>{
    task.isComplete = !task.isComplete;
    dispatchTask({type:"isComplete"})
  }

  // удаляю задачу
  const deleteTask = ()=>{
    task.isDelete= !task.isDelete;
    dispatchTask({type:"isDelete"})
  }

  // изменяю задачу
  const changeTextTask = ()=>{
    const idChangeTask = idChangeTest.current.textContent;
    dispatchId({type:'idChangeTask', id:idChangeTask})
    userChangeTaskFormVisibleMode();
  }

  return(
      <Task
        as="li"
        className="d-flex justify-content-between align-items-start ListGroupItem list-group-item"
        isComplete={task.isComplete}
        onDoubleClick={changeTextTask}>

        <div className="ms-2 me-auto bodyTextTask">
          <div
          className="fw-bold bodyTextTask">
            {task.time.toLocaleTimeString()}
          </div>

          <Badge bg="primary" pill ref={idChangeTest} >
          {/*номер задачи*/}
          {task.id}
          </Badge>

          <p ref={textTaskDivRef}>{task.text}</p>
        </div>

        <Fade in={task.isComplete}
          timeout={300}
          unmountOnExit>
          <div className="wrapperTrash" onClick={deleteTask}>
            <Trash/>
          </div>
        </Fade>

        <Badge bg="primary" pill>
        {/*день недели*/}
        {day[task.time.getDay()]}
        </Badge>

        <input type="checkbox" checked={task.isComplete} id="readyTask" onChange={readyTask} />
      </Task>
  )

},[])
