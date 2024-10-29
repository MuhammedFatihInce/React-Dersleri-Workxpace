import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const BASE_URL = "http://localhost:3005";

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  };

  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`); //alt gr + , => ``
    console.log(response.data);
  };

  const createUser = async (newUser) => {
    //POST: veri eklemek için kullanılır.
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data);
  };

  const updateUser = async (userId, updateUser) => {
    //PUT: veri güncellemek için kullanılır.
    const response = await axios.put(`${BASE_URL}/users/${userId}`, updateUser);
    console.log("response", response.data);
  };

  const deleteUserById = async (userId) => {
    const deleteResponse = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log("response", deleteResponse.data);
  };

  useEffect(() => {
    // getAllUsers();
    // getUserById(2);
    // const newUser = {
    //   username: "bilal",
    //   password: "3636",
    // };
    // createUser(newUser);
    // updateUser("3", {
    //   username: "yakup",
    //   password: "5555",
    // });

    deleteUserById(3);
  }, []);

  return <div></div>;
}

export default App;
