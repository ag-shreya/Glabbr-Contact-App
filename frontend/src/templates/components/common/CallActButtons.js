import React from "react";
import { MessageOutlined } from "@ant-design/icons";

function CallActButtons(props) {
  return (
    /* Action Btns */
    <div className="call-act-btn">
      <p className="me-5">
        <MessageOutlined className="pe-2" /> Send message
      </p>
      <p>
        <i className="fa-solid fa-phone pe-2"></i>
        Call
      </p>
    </div>
  );
}

export default CallActButtons;
