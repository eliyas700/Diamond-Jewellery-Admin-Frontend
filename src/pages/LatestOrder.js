import React from "react";
import { IoMdCart } from "react-icons/io";
const LatestOrder = () => {
  return (
    <div>
      <div className="d-flex align-items-center text-black-50">
        <IoMdCart size={22} />
        <h3 className="text-black-50 ms-1">Latest Orders</h3>
      </div>
    </div>
  );
};

export default LatestOrder;
