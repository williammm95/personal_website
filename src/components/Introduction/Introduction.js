import React from 'react';
import './Introduction.css';
import { Grid, Cell } from 'react-mdl';
import william from './william.jpg';
import asdf from './asdf.jpg';
import tesla from './tesla.jpg';

export class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      name: 'WILLIAM YE',
      skills: {
        skill_1: 'Machine Learning',
        skill_2: 'ReactJS',
        skill_3: 'JavaScript',
        skill_4: 'Python',
      },
      links: {
        linkedin: "https://www.linkedin.com/in/williamyeee/",
        github: "https://github.com/williammm95",
        youtube: "https://www.youtube.com/watch?v=FhMoUsOQl1Q",
        gurushots: "https://gurushots.com/williamyeee?tc=ef7575717856264840f0d406d34aa586",
      }

    })
  }

  render() {
    return (
      <div>
        <Grid className="intro-grid">
            <img
              src={tesla}
              alt="avatar"
              className="background-img"
              />
            <Cell col={12}></Cell>
            <div className="banner-text">
              <h1>{this.state.name}</h1>

              <hr/>
              <p>{this.state.skills.skill_1} | {this.state.skills.skill_2} | {this.state.skills.skill_3} | {this.state.skills.skill_4}</p>

              <div className="social-links">

                {/* website */}
                <a href={this.state.links.linkedin}  rel="noopener noreferrer" target="_blank">
                  <i className= "fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* website */}
                <a href={this.state.links.github}  rel="noopener noreferrer" target="_blank">
                  <i className= "fa fa-github-square" aria-hidden="true" />
                </a>

                {/* website */}
                <a href={this.state.links.youtube}  rel="noopener noreferrer" target="_blank">
                  <i className= "fa fa-youtube-square" aria-hidden="true" />
                </a>

                {/* website */}
                <a href={this.state.links.gurushots}  rel="noopener noreferrer" target="_blank">
                  <i className= "fa fa-camera" aria-hidden="true" />
                </a>

              </div>

            </div>

        </Grid>
      </div>
    )
  }
}
