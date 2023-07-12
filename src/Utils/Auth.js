
import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const [authorizedUser, setAuthorizedUser] = useState(false);

  return authorizedUser ? <Outlet /> : <Navigate to="/login" />;
}