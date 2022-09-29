import React, { useState, useRef } from "react";
import App from "../App";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import LoginForm from "./Form/LoginForm";

function Header() {
  let isActive = false;
  const [open, setOpen] = useState(isActive);
  function onOverPlay() {
    document.getElementById("overlay").style.display = "block";
  }
  function offOverPlay() {
    document.getElementById("overlay").style.display = "none";
  }
  let login = () => {
    if (open === isActive) {
      setOpen(true);

      return onOverPlay();
    } else {
      setOpen(false);

      return offOverPlay();
    }
  };

  return (
    <div className="header">
      {
        <div>
          {" "}
          <Navbar>
            <Container>
              <Navbar.Collapse className="row">
                <div class="col-3">
                  <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                </div>
                <div class="col-6">
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </div>
                <div class="col-3" style={{ textAlign: "end" }}>
                  <Button onClick={login}>sign-up</Button>{" "}
                  <Button>Login</Button>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div id="overlay">
            {" "}
            <div className="container">
              <div>
                <LoginForm></LoginForm>
              </div>{" "}
              <br></br>
              <div>
                <Button variant="danger" onClick={login}>
                  Cancel
                </Button>{" "}
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Header;
