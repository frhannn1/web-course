import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const backgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };
  useEffect(() => {
    backgroundColor();

    window.addEventListener("scroll", backgroundColor);
  });

  return (
    <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand href="#home" className="fs-3 fw-bold">
          F-Course
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* digunakan untuk menambahkan link pada navba sesuai yang ada di data */}
            {navLinks.map((link) => {
              return (
                <div className="nav-link" key={link.id}>
                  <NavLink
                    to={link.path}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    end
                  >
                    {link.text}
                  </NavLink>
                </div>
              );
            })}
          </Nav>
          <div className="masuk">
            <button className="btn btn-outline-danger rounded-1 ps-4 pe-4">
              Masuk
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
