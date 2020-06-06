import React, { Component } from "react";
import ProjectItem from "./ProjectItem";
import projects from "./projects";

export default class About extends Component {
  render() {
    return (
      <section className="work">
        <div className="work-wrapper">
          <h2>03. Projects I've Worked </h2>
          <div className="work-content">
            {projects.map((item, i) => (
              <ProjectItem render={item.render} key={i} />
            ))}

            {/* <p>Featured Projects </p>
            
            <p>
            - DianthUS 
            A web app aimed to bring down
            communication barriers between educators, parents and children with
            special needs by streamlining all communications into one platform.
            </p>

            <p>
            - Icopico 
            A web based game aimed to encourage people to integrate
            ecologically restorative habits in their daily routine. This project
            was showcased during the Ecocity World Summit 2019 hosted in
            Vancouver. 
            </p>
            
            <p>
            - MusiQR
            A website aimed to improve patient-caregive
            interation by making passive music therapy more accessible to
            everyone. This project was created during the Hackathon for
            Individuals with Complex Health Needs and was awarded 1st place out
            of 12 projects.
            </p> */}
          </div>
        </div>
      </section>
    );
  }
}
