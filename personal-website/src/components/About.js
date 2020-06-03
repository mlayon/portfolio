import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="content">
          <h2>About Me</h2>
          <p>
            Hi there, it's great to see you today. I'm Mikhaela - a software
            development student based in Vancouver, BC.
            
            <br/>
            As a clumsy person who enjoys creating things, software
            development has been a great outlet for me. 
            My goal is to create an impact on the community by providing
            technical solutions and bringing people together. 
            
            <br/>
            Currently, I'm taking BCIT's Computer Systems Technology diploma program. During my
            time at BCIT, I've been involved in the BCIT Women in Computing
            club, lending a hand on organizing events aimed to empower 
            women and other minorities in the tech field.
            
          </p>
        </div>
      </section>
    );
  }
}
