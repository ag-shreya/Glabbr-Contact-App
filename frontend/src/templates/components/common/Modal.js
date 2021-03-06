import React, { useEffect, useState } from "react";
import { Modal, Form, Tooltip, Button } from "antd";
// import UploadImage from "./modal/UploadImage";
import fields from "./modal/ContactFields";
import Dropdown from "./input/Dropdown";
import { BsStar, BsStarFill } from "react-icons/bs";

function ContactsModal(props) {
  const { isModalVisible, setIsModalVisible, handleOk, title, data } = props;
  const [state, setState] = useState({
    file: null,
    favorite: false,
  });

  useEffect(() => {
    fields.map((item) => {
      if (item.id === "status") {
        handleChange(item.id, data[item.id] ? "Active" : "Inactive");
      } else if (data[item.id]) {
        handleChange(item.id, data[item.id]);
      } else {
        handleChange(item.id, item.default ? item.default : "");
      }
    });
  }, [props]);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChange = (check, value) => {
    setState((prevState) => {
      return { ...prevState, [check]: value };
    });
  };


  const validateInput = () => {
    var flag = false;
    fields.some((item) => {
      if (item.required && !state[item.id]) {
        handleChange(`${item.id}-invalid`, true);
        flag = true;
        return true;
      } else if (state[`${item.id}-invalid`]) {
        handleChange(`${item.id}-invalid`, false);
      }
    });

    if (!flag)
      handleOk({
        name: state.name,
        phoneNumber: state.phoneNumber,
        status: state.status === "Active" ? true : false,
        location: state.location,
        organization: state.organization,
        isFavorite: state.isFavorite ? true : false,
        tags: ["client"],
      });
  };

  return (
    <Modal
      title={title}
      visible={isModalVisible}
      onOk={validateInput}
      onCancel={handleCancel}
      width={900}
      centered
    >
      <Form className="row">
        <div className="col-md-3 text-center">
          {/* <UploadImage /> */}
          <Tooltip title="favorite">
            <Button
              shape="circle"
              icon={state.favorite ? <BsStarFill /> : <BsStar />}
              size="small"
              className="me-2"
              onClick={() => handleChange("favorite", !state.favorite)}
            />
            Add to favorite
          </Tooltip>
        </div>
        <div className="col-md-9">
          <div className="row">
            {fields.map((field) => {
              if (field.type === "dropdown") {
                return (
                  <div className="form-group col-md-6" key={field.id}>
                    <Dropdown
                      data={field}
                      state={state}
                      handleChange={handleChange}
                    />
                  </div>
                );
              } else
                return (
                  <div className="form-group col-md-6" key={field.id}>
                    <label htmlFor={field.id}>{field.label}</label>
                    <input
                      {...field}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      value={state[field.id]}
                    />

                    {state[`${field.id}-invalid`] ? (
                      <small className="form-text text-danger">
                        Please entire the {field.label.toLowerCase()}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                );
            })}
          </div>
        </div>
      </Form>
    </Modal>
  );
}

export default ContactsModal;
