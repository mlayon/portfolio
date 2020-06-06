import React from "react";
// import Loading from "./components/Loading.js";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import "./stylings/App.css";

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
