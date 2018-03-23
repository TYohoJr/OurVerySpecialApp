import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import Signin from "../signin/signin.js";
import Biz from "../business/business.js";
import Signup from "../signup/signup.js";
import Profile from "../profile/profile.js";
import Popover1 from "../popover/popover.js";
import "./navbar.css";

var showProfile;

export default class Navbar2 extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.logOut = this.logOut.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logOut() {
    localStorage.clear();
    window.location.reload();
  }

  render() {
    let token = localStorage.getItem("token");
    if (token) {
      showProfile =
        <Profile stopSms={this.props.stopSms} userProfile={this.props.userProfile} testSms={this.props.testSms}/>
    } else {
      showProfile =
        <Popover1 stopSms={this.props.stopSms} userProfile={this.props.userProfile} testSms={this.props.testSms}/>
    }

    return (
      <div>
        <Navbar id="navbar-main" color="faded" light expand="md" className="w3-animate-left">
          <div id="show-profile-div">
            {showProfile}
          </div>
          <div id="welcome-logo">
            <img src={require("../project-images/logo.png")} className="App-logo" alt="logo" /><br />
          </div>
          <NavbarToggler onClick={this.toggle} number={this.props.number} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav id="navbar-buttons" className="ml-auto" navbar>
              <div>
                <UncontrolledDropdown id="navbar-dropdown" nav inNavbar>
                  <DropdownToggle nav caret>
                    Sign in/up
                </DropdownToggle>
                  <DropdownMenu id="dropdown-menu">
                    <div className="dropdown-item">
                      <Signin sendSms={this.props.sendSms} signIn={this.props.signIn} onPasswordChange={this.props.onPasswordChange}
                        onUserChange={this.props.onUserChange} username={this.props.username} password={this.props.password}
                        toggle={this.props.toggle} modal={this.props.modal} stopSms={this.props.stopSms} />
                    </div>
                    <DropdownItem>
                      <Signup />
                    </DropdownItem>
                    <DropdownItem>
                      <Biz />
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <button onClick={this.logOut}>Log Out</button>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
