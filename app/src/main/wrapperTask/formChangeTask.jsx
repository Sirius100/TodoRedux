import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap/';


export const FormChangeTask = ({props:{modeVisible, userChangeTask}})=>{

  return(
    <Modal
      show={modeVisible}
      onHide={userChangeTask}
      backdrop="static"
      keyboard={false}>
      <Modal.Dialog>
        <Modal.Header closeButton onHide={userChangeTask}>
          <Modal.Title>Введите текст задачи</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={userChangeTask}>Close</Button>
          <Button variant="primary" >Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>

  )
}
