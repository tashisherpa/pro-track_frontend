import React from 'react';
import { NavLink} from "react-router-dom";


const LinkButton = ({ to, children, onClick }) => (
  <NavLink to={to} onClick={onClick}>
    {children}
  </NavLink>
);

function LoginNavbar() {
  return (
    <div>
        <nav>
            <LinkButton to="/">Login</LinkButton>
            <LinkButton to="/signup">Sign Up</LinkButton>
        </nav>
    </div>
  )
}

export default LoginNavbar