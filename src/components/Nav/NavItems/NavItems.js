import React from "react";
import "./NavItems.css";
import NavItem from "./NavItem/NavItem";

const navItems = (props) => {
  return (
    <ul className="NavigationItems">
      <NavItem link="/burger-builder" active>
        BurgerBuilder
      </NavItem>
      {props.onAuth ? <NavItem link="/orders">My Orders</NavItem> : null}
      {props.onAuth ? (
        <NavItem link="/logout">Logout</NavItem>
      ) : (
        <NavItem link="/auth">Authenticate</NavItem>
      )}
    </ul>
  );
};

export default navItems;
