import React, { createContext, useState } from "react";
import { useDispatch } from "react-redux";
import { logoutUserThunk } from "../redux/users/users.action";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logoutUserThunk());
    navigate("/");
  };

  return (
    <span className="flex-1 ml-3 whitespace-nowrap" onClick= {handleLogout}> LogOut</span>
 );
};

//export default Logout;
