import React, { Component } from "react";
import "../stylings/hero.scss";

export default class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-wrapper">
          <div className="hero-title">Hello, my name is</div>
          <div className="hero-name">Mikhaela Layon</div>
          <div className="hero-subtitle">
            I'm a software developer based in Vancouver, BC specializing in
            building websites, applications and everything in between.
          </div>
        </div>
      </section>
    );
  }
}
