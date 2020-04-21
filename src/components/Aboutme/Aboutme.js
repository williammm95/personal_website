import React from 'react';
import './Aboutme.css';
import { Grid, Cell } from 'react-mdl';

export class Aboutme extends React.Component {
  render() {
    return (
      <div className="container-aboutme">>
        <h1 id="about_me_tab"> ABOUT WILLIAM </h1>
        <hr/>

        <div className="container-aboutme-intro">
          <Grid className="aboutme-grid">
            <Cell col={6}>
              <h6> Yo friend. This is William's home.</h6>
              <h6> William is a penultimate student from NTU, Singapore.</h6>
              <h6> He majors in Electrical and Electronic Engineering.</h6>
              <h6> Shortly after graduation, he hopes to become a <span>Machine Learning Scientist</span> or a freelance <span>Web Developer</span>.</h6>
              <h6> His interests range from ML/DL to full stack Web Development, backpacking to photography and video editing, investments to startups.</h6>
              <h6> Do<a href="#contact_me_tab">hit him up</a>if you have similar goals! </h6>
              <h6> He has a long term goal of starting a business in the hospitality sector, a.....</h6>
              <h3> Smart Hostel </h3>
            </Cell>
          </Grid>
        </div>

        <div className="container-aboutme-video">
          <container>
            <iframe title=" " width="560" height="315" src="https://www.youtube.com/embed/FhMoUsOQl1Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </container>
        </div>



      </div>
    )
  }
}
