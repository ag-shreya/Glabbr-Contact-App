import React, { useState, useEffect } from "react";
import { Spin, Space } from "antd";

// Redux
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/contacts/actions";

// Components
import Contacts from "../components/contacts/Contacts";
import Favorite from "../components/favorite/Favorite";
import Header from "../components/header/Header";
import Modal from "../components/common/Modal";

function Home() {
  let dispatch = useDispatch();
  const { loadingItems } = useSelector((state) => state.PostReducer);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [item, setItem] = useState({});
  const [title, setTitle] = useState("");

  useEffect(() => {
    handleGetContactItems();
  }, []);

  const showModal = (title, data) => {
    setItem(data);
    setTitle(title);
    setIsModalVisible(true);
  };

  const handleGetContactItems = (page = 1, take = 10) => {
    dispatch(actions.getContactItems({ page, take }));
  };

  const handleOk = (data) => {
    setIsModalVisible(false);
    if (title === "Add Contact") dispatch(actions.postContactItem(data));
    else dispatch(actions.updateContact(data));
  };

  const handleDelete = (id) => {
    setIsModalVisible(false);
    dispatch(actions.deleteContact(id));
  };

  return (
    <div className="container">
      {/* Components */}
      {loadingItems ? (
        <Space size="middle">
          <Spin size="large" />
        </Space>
      ) : (
        <>
          <Header
            showModal={() => showModal("Add Contact", {})}
          />
          <Favorite showModal={(data) => showModal("Edit Contact", data)} />
          <Contacts
            showModal={(data) => showModal("Edit Contact", data)}
            handleGetContactItems={handleGetContactItems}
          />
        </>
      )}

      {/* Modal */}
      <Modal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        handleOk={handleOk}
        handleDelete={handleDelete}
        title={title}
        data={item}
      />
    </div>
  );
}

export default Home;
