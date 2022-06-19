import React from "react";
import { IoMdCart } from "react-icons/io";
const LatestOrder = () => {
  return (
    <div>
      <div className="d-flex align-items-center text-black-50">
        <IoMdCart size={22} />
        <h3 className="text-black-50 ms-1">Latest Orders</h3>
      </div>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Keyword </th>
              <th scope="col">Results</th>
              <th scope="col">Hits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Watch</td>
              <td>19</td>
              <td>@2120</td>
            </tr>
            <tr>
              <td>Ma</td>
              <td>20</td>
              <td>@365</td>
            </tr>
            <tr>
              <td>432</td>
              <td>Dably</td>
              <td>20</td>
              <td>@365</td>
            </tr>
            <tr>
              <td>123</td>
              <td>Hablu</td>
              <td>20</td>
              <td>@365</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestOrder;
