import React from 'react';
import './App.css';
import { Navbar } from '../Navbar/Navbar';
import { Introduction } from '../Introduction/Introduction';
import { Projects } from '../Projects/Projects';
import { Aboutme } from '../Aboutme/Aboutme';
import { Contactme } from '../Contactme/Contactme';
import { Foot } from '../Foot/Foot';



export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Introduction />
        <Aboutme />
        <Projects />
        <Contactme />
        <Foot />
      </div>
    )
  }
}
