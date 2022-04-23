import React, { useState } from "react";
import { Modal, Form, Input, InputNumber, Button } from "antd";

function ContactsModal(props) {
  const { isModalVisible, setIsModalVisible, handleOk, title } = props;
  const [file, setFile] = useState("");

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      title={title}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={1200}
      centered
    >
      <Form>
        <div className="row">
          <div className="col-md-6">
            <img src="" alt="" width="10rem" hight="10rem" />
            {/* <input type="file" className="w-100" onChange={} /> */}
          </div>
          <div className="col-md-6">
            <input type="text" className="w-100" />
          </div>
          <div className="col-md-6">
            <input type="text" className="w-100" />
          </div>
          <div className="col-md-6">
            <input type="text" className="w-100" />
          </div>
          <div className="col-md-6">
            <input type="text" className="w-100" />
          </div>
        </div>
      </Form>
    </Modal>
  );
}

export default ContactsModal;
