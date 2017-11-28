import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

import './App.css';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';




class App extends Component {


  scrollMethod(comp, dur){
    scrollToComponent(this[comp], { offset: 0, align: 'top', duration: dur, ease: 'inOutCirc'});
  }


  render() {
    return (
      <div className="App">
        <Landing ref={(section) => { this.Landing = section; }} scrollMethod={(comp, dur) => this.scrollMethod(comp, dur)}/>
        <About ref={(section) => { this.About = section; }}/>
        <Skills ref={(section) => { this.Skills = section; }}/>
        <Projects ref={(section) => { this.Projects = section; }}/>
        <Contact ref={(section) => { this.Contact = section; }}/>
        <Footer />
      </div>
    );
  }
}

export default App;
