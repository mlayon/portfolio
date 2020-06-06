import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default [
  {
    name: "DianthUS",
    render: (
      <div className="project-item">
        <div className="project-item__title">DianthUS</div>

        <div className="project-item__desc">
          A web app aimed to bring down communication barriers between
          educators, parents and children with special needs by streamlining all
          communications into one platform.
        </div>

        <div className="project-item__tag">
          <span>Javascript</span>
          <span>Firebase</span>
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://devpost.com/software/dianthus"
          >
            <FontAwesomeIcon icon="globe"></FontAwesomeIcon>
          </a>
        </div>
      </div>
    ),
  },
  {
    name: "Icopico",
    render: (
      <div className="project-item">
        <div className="project-item__title">Icopico</div>

        <div className="project-item__desc">
          A web based game aimed to encourage people to integrate ecologically
          restorative habits in their daily routine. This project was showcased
          during the Ecocity World Summit 2019 hosted in Vancouver.
        </div>

        <div className="project-item__tag">
          <span>Phaser</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>Firebase</span>
          <span>MySQL</span>
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/mlayon/IcoPico-hosted-version"
          >
            <FontAwesomeIcon icon="code"></FontAwesomeIcon>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://icopico-bcit.herokuapp.com/"
          >
            <FontAwesomeIcon icon="globe"></FontAwesomeIcon>
          </a>
        </div>
      </div>
    ),
  },

  {
    name: "MusiQR",
    render: (
      <div className="project-item">
        <div className="project-item__title">MusiQR</div>

        <div className="project-item__desc">
          A website aimed to improve patient-caregive interation by making
          passive music therapy more accessible to everyone. This project was
          created during the Hackathon for Individuals with Complex Health Needs
          and was awarded 1st place out of 12 projects.
        </div>

        <div className="project-item__tag">
          <span>HTML</span>
          <span>CSS</span>
          <span>Javascript</span>
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://commons.bcit.ca/news/2018/10/students-take-first-place-at-microsoft-hackathon-with-idea-for-helping-dementia-patients/"
          >
            <FontAwesomeIcon icon="globe"></FontAwesomeIcon>
          </a>
        </div>
      </div>
    ),
  },
];
