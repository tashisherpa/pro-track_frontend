import React, { createContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUserThunk } from '../redux/users/users.action';
import { useNavigate } from 'react-router-dom';



export const Logout = () => {
const dispatch = useDispatch();
const navigate = useNavigate();


  const handleLogout = async() => {
    await dispatch(logoutUserThunk());
    navigate('/');
  };

  return (

    <button className="flex item-center ml-3 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"onClick= {handleLogout}> LogOut</button>
 );
};

//export default Logout;


