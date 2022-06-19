import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Media = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <div className='my-3'>
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item "><a href="/">Dashboard</a></li>
    <li class="breadcrumb-item " aria-current="page">Media</li>
  </ol>
</nav>
<>
      <Button variant="primary" onClick={handleShow}>
       Add Media
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Media</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form >
                <input style={{width:"100%",height:"45px"}} className="px-2 border-2 border" type="text" placeholder='Name' />
                <input style={{width:"100%",height:"45px"}} className="px-2 mt-2 border-2 border" type="file" placeholder='Name' />
            <div className='d-flex justify-content-between align-items-center'>
                <input style={{width:"48%",height:"45px"}} className="px-2 mt-2 border-2 border" type="number" placeholder='Quantity' />
                <div style={{width:"48%",height:"45px"}}          class="input-group mt-2">
                 <select class="form-select" id="inputGroupSelect02">
                    <option selected>Choose...</option>
                    <option value="1">Active</option>
                    <option value="2">InActive</option>
                </select>
                <label class="input-group-text" for="inputGroupSelect02">Status</label>
                </div>
            </div>
            <input className='btn btn-primary my-2' type="submit" value="Add Now" />
            </form>
        </Modal.Body>
        
      </Modal>
    </>


<div>

</div>
<Table striped bordered hover className='my-4'>
      <thead>
        <tr>
          <th>SN</th>
          <th>Name</th>
          <th>Image</th>
          <th>Quantity</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        
      </tbody>
    </Table>
    
 
        </div>
    );
};

export default Media;