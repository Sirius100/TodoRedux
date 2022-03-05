import React from 'react';
import {useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap/';


export const FormChangeTask = ()=>{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(!show);

  return(
    <>
      <Modal
       show={show}
       onHide={handleClose}
       backdrop="static"
       keyboard={false}>
        <Modal.Dialog>
          <Modal.Header closeButton onHide={handleClose}>
            <Modal.Title>Введите текст задачи</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" >Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </>

  )
}
