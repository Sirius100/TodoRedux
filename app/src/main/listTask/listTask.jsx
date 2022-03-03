import {useReducer, useRef} from 'react'
import reducer from '../../reducer/reducer'
import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal'
import  {Button}  from 'react-bootstrap'
import Fade from 'react-bootstrap/Fade'
import {Task} from './task';
import './listTask.css'
import React from 'react'

const ListTask = styled.div`
  width: 100%;
  text-align: center;
  transition: all, .6s;
`

export const ClistTask = React.memo(({mode, closeDispatchTask }) => {
  const textArea = useRef();
  const [tasks, dispatchAdd] = useReducer(reducer, [])

  const writeTasksState = ()=>{
    if(!textArea.current.value){
      closeDispatchTask({type:'add'});
      return;
    }
    dispatchAdd({type:"addTask", payload:{
      id: tasks.length+1,
      time: new Date(),
      text: textArea.current.value,
      isComplete: false,
      isDelete: false,
    }});
    closeDispatchTask({type:'add'})
  }

  return (

    <ListTask>
      <Fade in={mode}
      timeout={200}
      unmountOnExit>
        <Modal.Dialog>
          <Modal.Header closeButton
          onHide={()=> closeDispatchTask({type:'add'})}>
            <Modal.Title>Поступила новая задача</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Статус задачи: {""}</p>
            <p>Номер задачи: №{""}</p>
            <p><code>тело задачи из запроса</code></p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={()=> closeDispatchTask({type:'add'})}>Close</Button>
            <Button variant="primary" onClick={writeTasksState}>Add Task</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Fade>

      <Task tasks={tasks} dispatchAdd={dispatchAdd}/>

    </ListTask>
  )
})
