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
      <Navbar type="dark" expand="md" id="navShape">
        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={this.state.collapseOpen} navbar id="navStyle" >
          <Nav navbar >
            <Button theme="secondary" style={{margin: "20px"}}>
              <NavLink active href="/">
                Main
              </NavLink>
            </Button>
            <Button theme="secondary" style={{margin: "20px", height: "20px" padding:"0"}}>
              <NavLink active href="/resume">
                Resume
              </NavLink>
            </Button>
            {/* <NavLink active href="#">
                Past Topics
              </NavLink>
           
              <NavLink active href="#">
                Current Projects
              </NavLink> */}
            <Button theme="secondary" style={{margin: "20px"}}>
              <NavLink active href="/contact">
                Contact
              </NavLink>
            </Button>
          </Nav>

        </Collapse>
      </Navbar>
    );
  }
}
