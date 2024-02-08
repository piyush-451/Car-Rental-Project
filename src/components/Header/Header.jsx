import React, { useRef } from "react";

import { Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../../styles/header.css";

import EventIcon from "@mui/icons-material/Event";

const navLinks = [
  {
    path: "/home",
    display: "HOME",
  },
  {
    path: "/home",
    display: "SERVICES",
  },
  {
    path: "/home",
    display: "PACKAGES",
  },
  {
    path: "/about",
    display: "ABOUT US",
  },
  {
    path: "/contact",
    display: "CONTACT US",
  },
  {
    path: "/blogs",
    display: "BLOGS",
  },

  {
    path: "/home",
    display: "MY ACCOUNT",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center">
            <div className="navbar__logo">
              <img src="./logo512.png" width={"70px"} alt="Logo" />
            </div>

            <div className="right__wrapper"></div>
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) => {
                      console.log(navClass);
                      return navClass.isActive
                        ? "nav__active nav__item"
                        : "nav__item";
                    }}
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <NavLink
                to={"/home"}
                style={{
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  borderRadius: "35px",
                  cursor: "pointer",
                  padding: "8px 12px", // Adjust padding as needed
                  display: "flex",
                  alignItems: "center", // Align items vertically in the center
                  textDecoration: "none",
                }}
              >
                <EventIcon style={{ marginRight: "8px" }} />{" "}
                {/* Calendar icon */}
                <span>Bookings</span>
              </NavLink>
            </div>

            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
