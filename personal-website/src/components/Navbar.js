import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../img/m-logo.png";
import "../stylings/navbar.scss";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      scrollPos: 0
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  handleScroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos
    });
  };

  render() {

    console.log(this.state);
    return (
      
      <nav id="nav" className={this.state.show ? "active" : "hidden"}>
        
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo."
            onClick={this.scrollToTop}
          />

          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                01. About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                02. Skills
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                to="work"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                03. Work
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                04. Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
