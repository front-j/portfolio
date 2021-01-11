import React from "react";
import photo from "../images/photo.jpg";
import "./Style.scss";
import Stickyfill from "stickyfilljs";
import { Link } from "react-scroll";

const menu = document.getElementsByClassName("menu");

function Menu() {
  Stickyfill.add(menu);
  return (
    <div className="header">
      <div className="logo">
        <img src={photo} alt="id_picture" height="10%" width="10%" />
        <h1>AYEONG JEONG</h1>
      </div>
      <div className="menu">
        <div>
          <Link to="about" smooth={true}>
            ABOUT
          </Link>
        </div>
        <div>
          <Link to="skill" smooth={true}>
            SKILL
          </Link>
        </div>
        <div>
          <Link to="project" smooth={true}>
            PROJECT
          </Link>
        </div>
        <div>
          <Link to="contact" smooth={true}>
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
