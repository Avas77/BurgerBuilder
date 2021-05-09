import React from "react";
import "./SideBar.css";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import Aux from "../../../hoc/Auxillary";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideBar = (props) => {
  let classes = ["SideDrawer", "Close"];
  if (props.show) {
    classes = ["SideDrawer", "Open"];
  }

  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.closed} />
      <div className={classes.join(" ")}>
        <Logo height="11%" />
        <nav>
          <NavItems onAuth={props.onAuth} />
        </nav>
      </div>
    </Aux>
  );
};

export default sideBar;
