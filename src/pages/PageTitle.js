import React from "react";
import { ImDisplay } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";
const PageTitle = () => {
  return (
    <div className="text-black-50 d-flex align-items-center justify-content-between  px-5 w-100 bg-white py-2">
      <div
        style={{ width: "110px" }}
        className="d-flex align-items-center text-black-50 justify-content-between"
      >
        <ImDisplay size={23} />
        <h6>Visit Store</h6>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <h5 className="me-3">EN</h5>
        <div className="d-flex align-items-center">
          <FaUserCircle size={26} />
          <h5 className="ms-1">User</h5>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
