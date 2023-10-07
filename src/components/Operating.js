import React from 'react'
import { useState } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Operating({operatingData}) {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
        <>
      <Button className='btn1 me-auto' style={{textAlign:'start'}}  onClick={handleShow}><span>
      <i class="fa-solid fa-clock m-1" style={{color:'white'}}></i>Operating Hours</span>
         
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton className='modal1' >
          <Modal.Title className='mTitile'> <i class="fa-solid fa-clock" style={{color:'white'}}></i> Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalBody'>
            
        <ListGroup className='list'>
        <ListGroupItem className='list1'> <b>Monday</b>   :-      {operatingData.Monday}</ListGroupItem>
        <ListGroupItem className='list1'> <b>Tuesday</b>  :-      {operatingData.Tuesday}</ListGroupItem>
        <ListGroupItem className='list1'> <b>Wednesday</b>:-      {operatingData.Wednesday}</ListGroupItem>
        <ListGroupItem className='list1'> <b>Thursday</b>:-      {operatingData.Thursday}</ListGroupItem>
        <ListGroupItem className='list1'> <b>Friday</b>   :-      {operatingData.Friday}</ListGroupItem>
        <ListGroupItem className='list1'> <b>Saturday</b> :-      {operatingData.Saturday}</ListGroupItem>
        <ListGroupItem className='list1'> <b>Sunday</b>   :-      {operatingData.Sunday}</ListGroupItem>
        </ListGroup>
        

            
        </Modal.Body>

        
       


        <Modal.Footer className='mfooter'>
          <Button className='btn2' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default Operating