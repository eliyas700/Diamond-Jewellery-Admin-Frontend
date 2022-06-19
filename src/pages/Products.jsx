import React, { useState } from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiFillDelete } from "react-icons/ai";
import PageTitle from "./PageTitle";
const Products = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <PageTitle></PageTitle>
      <div className="my-3">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item ">
              <a href="/">Dashboard</a>
            </li>
            <li class="breadcrumb-item " aria-current="page">
              Products
            </li>
          </ol>
        </nav>
        <>
          <Button variant="primary" onClick={handleShow}>
            Add Products
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Products</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <input
                  style={{ width: "100%", height: "45px" }}
                  className="px-2 border-2 border"
                  type="text"
                  placeholder="Name"
                />
                <input
                  style={{ width: "100%", height: "45px" }}
                  className="px-2 mt-3 border-2 border"
                  type="file"
                  placeholder="Name"
                />
                <div className="d-flex justify-content-between align-items-center">
                  <input
                    style={{ width: "48%", height: "45px" }}
                    className="px-2 mt-3 border-2 border"
                    type="number"
                    placeholder="Quantity"
                  />
                  <div style={{ width: "48%", height: "45px" }} class="mt-3">
                    <input
                      style={{ width: "100%", height: "45px" }}
                      className="px-2  border-2 border"
                      type="number"
                      placeholder="Price"
                    />
                  </div>
                </div>
                <textarea
                  style={{ width: "100%", height: "85px" }}
                  name=""
                  id=""
                  className="mt-3 px-2"
                  placeholder="Description"
                ></textarea>
                <input
                  className="btn btn-primary my-2"
                  type="submit"
                  value="Add Now"
                />
              </form>
            </Modal.Body>
          </Modal>
        </>

        <div></div>
        <Table striped bordered hover className="my-4">
          <thead>
            <tr>
              <th>SN</th>
              <th>Name</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Price</th>
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
              <td>
                <div className="flex ">
                  <Button className="me-1" variant="danger" size="sm">
                    <AiFillDelete />
                  </Button>
                  <Button variant="primary" size="sm">
                    Update
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Products;
