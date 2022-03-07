import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap/';


export const FormChangeTask = ({props:{modeVisible, userChangeTaskFormVisibleMode, changeTextTaskSaveClick, newTextTask}})=>{

  return(
    <Modal
      show={modeVisible}
      onHide={userChangeTaskFormVisibleMode}
      backdrop="static"
      keyboard={false}>
      <Modal.Dialog>
        <Modal.Header closeButton onHide={userChangeTaskFormVisibleMode}>
          <Modal.Title>Введите текст задачи</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <textarea onChange={newTextTask} cols="30" rows="10"></textarea>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={userChangeTaskFormVisibleMode}>Close</Button>
          <Button variant="primary" onClick={changeTextTaskSaveClick}>Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  )
}
