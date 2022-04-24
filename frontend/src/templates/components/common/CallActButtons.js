import React from "react";
import { FiMessageSquare, FiPhoneCall } from "react-icons/fi";

function CallActButtons({ phoneNumber }) {
  return (
    /* Action Btns */
    <div className="call-act-btn">
      <p className="me-5">
        <FiMessageSquare className="pe-2" /> Send message
      </p>
      <p>
        <FiPhoneCall className="pe-2" /> Call
      </p>
    </div>
  );
}

export default CallActButtons;
