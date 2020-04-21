import React from 'react';
import './Projects.css';
import { Grid, Card, CardTitle, CardActions, Button } from 'react-mdl';


export class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      style: {
      }

    })
  }

  render() {
    return (
      <div className="container-projects">
        <h2 id="projects_tab">PROJECTS</h2>
        <hr/>
        <Grid className="projects-grid">

          <div className="container-projects-card">
              {/* Project 1*/}
            <Card shadow={4}>
              <CardTitle className="projects-card-bg-1"></CardTitle>
                <CardActions border style={{backgroundColor: 'rgb(11, 25, 61)'}}>
                  <Button className="projects-card-button" colored>
                    <a href="https://github.com/williammm95/personal_website" target="_blank" rel="noopener noreferrer">Portfolio Website</a>
                  </Button>
                </CardActions>
              </Card>
          </div>


          <div className="container-projects-card">
            <Card shadow={4}>
                <CardTitle className="projects-card-bg-2"></CardTitle>
                  <CardActions border style={{backgroundColor: 'rgb(11, 25, 61)'}}>
                    <Button className="projects-card-button" colored>
                      <a href="https://github.com/williammm95/Kaggle_Titanic" target="_blank" rel="noopener noreferrer">Machine Learning: Titanic</a>
                    </Button>
                  </CardActions>
              </Card>
          </div>

        </Grid>
      </div>
    )
  }
}
