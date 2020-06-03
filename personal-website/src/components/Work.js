import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <section id="work">
        <div className="content">
          <h2>Projects I've Done</h2>
          <p>
            Featured Projects 
            <br/>
            - DianthUS 
            A web app aimed to bring down
            communication barriers between educators, parents and children with
            special needs by streamlining all communications into one platform.

            <br/>
            - Icopico 
            A web based game aimed to encourage people to integrate
            ecologically restorative habits in their daily routine. This project
            was showcased during the Ecocity World Summit 2019 hosted in
            Vancouver. 
            
            <br/>
            - MusiQR
            A website aimed to improve patient-caregive
            interation by making passive music therapy more accessible to
            everyone. This project was created during the Hackathon for
            Individuals with Complex Health Needs and was awarded 1st place out
            of 12 projects.
          </p>
        </div>
      </section>
    );
  }
}
