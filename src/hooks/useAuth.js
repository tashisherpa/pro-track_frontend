import { useEffect, useState } from "react";
import React from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

export default function useAuth() {
  const [user, setUser] = useState({});

  useEffect(() =>{
    async function getUser() {
        const response = await axios.get(`${process.env.REACT_APP_AUTH}me`);
        //console.log("User: ", response.data);
        setUser(response.data);
    }
    getUser();
  }, []);
  return [user, setUser];

}

