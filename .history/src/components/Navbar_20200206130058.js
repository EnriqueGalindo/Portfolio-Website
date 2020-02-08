import React from "react";
import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Button
} from "shards-react";

export default class NavExample extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render() {
    return (
      <Navbar type="dark"  expand="md" id="navShape">
        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={this.state.collapseOpen} navbar id="navStyle" >
          <Nav navbar >
          <Button outline pill theme="secondary">
          <NavLink active href="/">
                Main
              </NavLink>
              <Button /
              <NavLink active href="/resume">
                Resume
              </NavLink>
            
              {/* <NavLink active href="#">
                Past Topics
              </NavLink>
           
              <NavLink active href="#">
                Current Projects
              </NavLink> */}
            
              <NavLink active href="/contact">
                Contact
              </NavLink>
            
          </Nav>

        </Collapse>
      </Navbar>
    );
  }
}
