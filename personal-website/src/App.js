import React from "react";

// import Loading from "./components/Loading.js";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import "./stylings/App.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCode, faGlobe } from '@fortawesome/free-solid-svg-icons';
 

library.add(fab, faCode, faGlobe);

const App = () => {

    return (
      // <Loading/>
      <div className="App">
        <Navbar/>
        <Hero/>
        <About/>
        <Work/>
        <Contact/>
      </div>
    )
  }


export default App;
