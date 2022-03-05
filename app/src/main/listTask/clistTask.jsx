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

export const ClistTask = React.memo(({mode, closeDispatchTask}) => {

  const textCode = useRef();
  const [tasks, dispatchAdd] = useReducer(reducer, [])

  const writeTasksState = ()=>{
    if(!textCode){
      closeDispatchTask({type:'request'});
      return;
    }
    dispatchAdd({type:"addTask", payload:{
      id: mode.numberTask,
      time: new Date(),
      text: mode.textTask,
      isComplete: false,
      isDelete: false,
    }});
    closeDispatchTask({type:'request', payload:{visibleForm:false}})
  }

  return (

    <ListTask>
      <Fade in={mode.visibleForm}
      timeout={200}
      unmountOnExit>
        <Modal.Dialog>
          <Modal.Header closeButton
          onHide={()=> closeDispatchTask({type:'request'})}>
            <Modal.Title>Поступила новая задача</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Статус задачи: {mode.statusTask}</p>
            <p>Номер задачи: №{mode.numberTask}</p>
            <p><code ref={textCode}>{mode.textTask}</code></p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={()=> closeDispatchTask({type:'request'})}>Close</Button>
            <Button variant="primary" onClick={writeTasksState}>Add Task</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Fade>

      <Task tasks={tasks} dispatchAdd={dispatchAdd}/>

    </ListTask>
  )
})
