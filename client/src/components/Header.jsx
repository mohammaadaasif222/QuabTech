import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction";
import { Route } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;



  const dispatch = useDispatch();


  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Github Jobs</Navbar.Brand>
          </LinkContainer>
          {/* <Route component={({ history }) => <Search history={history} />} /> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {userInfo ? (
                <NavDropdown title={userInfo.user.name}>
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={()=>dispatch(logout())}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                <NavDropdown  title={"Log In"}>
                  <LinkContainer to="/login">
                    <NavDropdown.Item >
                      <i className="fas fa-user"></i>
                      &nbsp;Log In
                    </NavDropdown.Item>
                  </LinkContainer>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
