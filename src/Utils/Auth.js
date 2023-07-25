import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  /**
   * a function that protects the routes
   * it insures that a user cannot by-pass the login and try to
   * access routes they arent suppose to without being authorized (without loggin in)
   *
   * If the user is not logged in and trying to access the route,
   * the function will navigate them to the login page
   */

  //state to check if the user is authorized or not
  const authorizedUser = useSelector((state) => !!state.users.authUser.id);
  const isLogIn = localStorage.getItem("isLogIn");
  console.log("authorizedUser", authorizedUser);

  return authorizedUser || isLogIn ? <Outlet /> : <Navigate to="/" />;
}
