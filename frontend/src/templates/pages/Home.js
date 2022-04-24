import React, { useState, useEffect } from "react";
import { Spin, Space } from "antd";
import axios from "axios";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../store/contacts/actions";
import { config } from "../../helpers/Constants";

// Components
import Contacts from "../components/contacts/Contacts";
import Favorite from "../components/favorite/Favorite";
import Header from "../components/header/Header";
import Modal from "../components/common/Modal";

function Home() {
  let dispatch = useDispatch();
  const { contacts, loadingItems } = useSelector((state) => state.PostReducer);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [item, setItem] = useState({});
  const [title, setTitle] = useState("");

  useEffect(() => {
    dispatch(getItems());
  }, []);

  const showModal = (title, data) => {
    if (data) setItem(data);
    setTitle(title);
    setIsModalVisible(true);
  };

  const handleOk = (data) => {
    setIsModalVisible(false);
  
    const endpoint = config.url.API_URL+"/item";
    axios.post(endpoint, data).then((res) => {
      console.log(res.data);
    });
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
          <Header showModal={() => showModal("Add Contact")} />
          <Favorite
            showModal={(data) => showModal("Edit Contact", data)}
          />
          <Contacts
            showModal={(data) => showModal("Edit Contact", data)}
            data={contacts}
          />
        </>
      )}

      {/* Modal */}
      <Modal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        handleOk={handleOk}
        title={title}
        data={item}
      />
    </div>
  );
}

export default Home;
