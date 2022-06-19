import React, { useState } from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiFillDelete } from "react-icons/ai";
import PageTitle from "./PageTitle";
const Users = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      {" "}
      <div>
        <PageTitle></PageTitle>
        <div className="my-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item ">
                <a href="/">Dashboard</a>
              </li>
              <li class="breadcrumb-item " aria-current="page">
                Users
              </li>
            </ol>
          </nav>
          <>
            <Button variant="primary" onClick={handleShow}>
              Add User
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add User</Modal.Title>
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

                  <input
                    style={{ width: "100%", height: "45px" }}
                    className="px-2 mt-3 border-2 border"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    style={{ width: "100%", height: "45px" }}
                    className="px-2 mt-3 border-2 border"
                    type="number"
                    placeholder="Phone"
                  />

                  <div
                    style={{ width: "100%", height: "45px" }}
                    class="input-group mt-2"
                  >
                    <select class="form-select" id="inputGroupSelect02">
                      <option selected>Choose...</option>
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                    <label class="input-group-text" for="inputGroupSelect02">
                      Role
                    </label>
                  </div>
                  <input
                    className="btn btn-primary my-4"
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
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
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
                <td>
                  <div className="flex ">
                    <Button className="me-1" variant="danger" size="sm">
                      <AiFillDelete />
                    </Button>
                    <Button variant="primary" size="sm">
                      Make Admin
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Users;
