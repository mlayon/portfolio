import React from "react";

import Loading from "./components/Loading.js";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import "./stylings/base.scss";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCode, faGlobe } from '@fortawesome/free-solid-svg-icons';
// import Particles from 'react-particles-js';
 

library.add(fab, faCode, faGlobe);

const App = () => {
    return (

      <div className="App">
        {/* <Particles/> */}
        <Navbar/>
        {/* <Loading/> */}
        <Hero/>
        <About/>
        <Work/>
        <Contact/>
      </div>
    )
  }


export default App;
