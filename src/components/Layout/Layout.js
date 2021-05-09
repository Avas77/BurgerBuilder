import React, { Component } from "react";
import Aux from "../../hoc/Auxillary";
import "./Layout.css";
import Toolbar from "../Nav/Toolbar/Toolbar";
import SideBar from "../Nav/Sidebar/SideBar";
import { connect } from "react-redux";

class Layout extends Component {
  state = {
    showBar: false,
  };

  sideBarClosed = () => {
    this.setState({
      showBar: false,
    });
  };

  toggleHandler = () => {
    this.setState((prevState) => {
      return { showBar: !prevState.showBar };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar onAuth={this.props.onAuth} open={this.toggleHandler} />
        <SideBar
          onAuth={this.props.onAuth}
          show={this.state.showBar}
          closed={this.sideBarClosed}
        />
        <main className="content">{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    onAuth: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
