import React from "react";

function UserDetails({ name, organization }) {
  return (
    <div>
      <h5 className="contact-name">{name}</h5>
      <p className="fw-bold text-muted m-0">{organization}</p>
    </div>
  );
}

export default UserDetails;
