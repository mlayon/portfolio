import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <section className="about">
        <div className="about-wrapper">
          <h2>01. About</h2>
          <div className="about-content">
            <p>
              Hi! It's great to see you today. I'm Mikhaela - a software
              developer based in Vancouver, BC.
            </p>  

            <p>
              As a clumsy person who enjoys creating things, software
              development has been a great outlet for me. My goal is to create
              an impact on the community by providing technical solutions and
              bringing people together.
            </p>

            <p>
              Currently, I'm taking the Computer Systems Technology diploma
              program at BCIT. During my time there, I've been heavily involved in the BCIT
              Women in Computing club, lending a hand on organizing events aimed
              to empower women and other minorities in the tech field.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
