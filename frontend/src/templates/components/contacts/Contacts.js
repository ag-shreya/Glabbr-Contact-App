import React from "react";
import Table from "./Table";

function Contacts(props) {
  return (
    <div className="py-5">
      <h2 className="text-heading">Contacts List</h2>
      <Table {...props} />
    </div>
  );
}

export default Contacts;
