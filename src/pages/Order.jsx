import React from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { AiFillDelete } from "react-icons/ai";
import PageTitle from "./PageTitle";
const Order = () => {
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
                Orders
              </li>
            </ol>
          </nav>

          <div></div>
          <Table striped bordered hover className="my-4">
            <thead>
              <tr>
                <th>SN</th>
                <th>User</th>
                <th>Image</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
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
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                  <div className="flex ">
                    <Button className="me-1" variant="danger" size="sm">
                      <AiFillDelete />
                    </Button>
                    <Button variant="primary" size="sm">
                      Details
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

export default Order;
