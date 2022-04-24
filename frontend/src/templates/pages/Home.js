import React, { useState, useEffect } from "react";
import axios from "axios";

import Contacts from "../components/contacts/Contacts";
import Favorite from "../components/favorite/Favorite";
import Header from "../components/header/Header";
import Modal from "../components/common/Modal";
import { urls } from "../../config/CONSTANTS";

function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [item, setItem] = useState(null);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const endpoint = urls("getItem");
    axios.get(endpoint).then((res) => {
      const persons = res.data;
      // this.setState({ persons });
      console.log("first", persons);
    });
  }, []);

  const showModal = (title, data) => {
    if (data) setItem(data);
    setTitle(title);
    setIsModalVisible(true);
  };

  const handleOk = (data) => {
    setIsModalVisible(false);

    const endpoint = urls("postItem");
    axios.post(endpoint, data).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className="container">
      {/* Components */}
      <Header showModal={() => showModal("Add Contact")} />
      <Favorite
        showModal={(data) => showModal("Edit Contact", data)}
        data={Array.from(Array(parseInt(10)).keys())}
      />
      <Contacts
        showModal={(data) => showModal("Edit Contact", data)}
        data={Array.from(Array(parseInt(10)).keys())}
      />

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
