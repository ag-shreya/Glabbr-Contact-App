import React from "react";
import { IoFilter } from "react-icons/io5";
import Search from "../common/Search";

function Header({ showModal }) {
  return (
    <div className="pt-5 d-flex justify-content-between align-items-center">
      {/* Brand name */}
      <div>
        <h1 className="m-0">DOZ Pharmacy - Contacts</h1>
      </div>

      {/* Action Btn */}
      <div>
        <button className="btn btn-add" onClick={showModal}>
          Add Contact
        </button>
        <button className="btn btn-light">
          <IoFilter />
        </button>
        <Search />
      </div>
    </div>
  );
}

export default Header;
