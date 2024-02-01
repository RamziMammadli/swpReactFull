import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import { Header } from "../../Components/Header";
import axios from "axios";
import ReactModal from "react-modal";
import CatCard from "../../Components/Cards/CategoryCard/CatCard";

const Home = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [visible, setVisible] = useState(false);

  const addPost = async () => {
   
    
      const response = await axios
      .post("https://northwind.vercel.app/api/products/", {
        name: name,
        age: age,
      })
      .then((response) => {
        console.log(response.data);
      });
    
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function openModal() {
    setVisible(true);
  }

  function closeModal() {
    setVisible(false);
  }


  return (
    <div className={styles.container}>
      <Header />
      <input
        placeholder="Daxil edin"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name}
      <input
        placeholder="Daxil edin"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      {age}
      <button onClick={addPost}>ADD</button>
      <div>
        <button onClick={openModal}>Open Modal</button>
        <ReactModal
          isOpen={visible}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </ReactModal>
      </div>
      {data.map((item) => (
        <CatCard item={item} />
      ))}
    </div>
  );
};

export default Home;
