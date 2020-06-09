import React, { Component } from "react";
import ProjectItem from "./ProjectItem";
import projects from "./projects";
import "../stylings/work.scss";

export default class About extends Component {
  render() {
    return (
      <section className="work">
        <div className="content-grid">
          <div className="work-wrapper">
            <h2>03. Projects I've Worked On</h2>
            <div className="work-content">
              {projects.map((item, i) => (
                <ProjectItem render={item.render} key={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
