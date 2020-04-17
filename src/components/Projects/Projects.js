import React from 'react';
import './Projects.css';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


export class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      style: {
        color: '#fff',
        height: '176px',
        background: 'url(https://arabiconline.eu/wp-content/uploads/2017/08/photo-960x675.jpg) center / cover',
      }

    })
  }

  render() {
    return (
      <div>
        <Grid className="projects">
          <h2 id="projects">PROJECTS</h2>
          <Cell className="cell-test" col={12}>
            <div className="projects-card">
              {/* Project 1*/}
              <Card shadow={5}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://arabiconline.eu/wp-content/uploads/2017/08/photo-960x675.jpg) center / cover'}} >React Project #1</CardTitle>
                <CardText>wooooooooooooooooooooooooo</CardText>
                <CardActions border>
                  <Button colored>Github</Button>
                  <Button colored>Code</Button>
                  <Button colored>Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
              </Card>
            </div>

            <div className="projects-card">
              {/* Project 1*/}
              <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://arabiconline.eu/wp-content/uploads/2017/08/photo-960x675.jpg) center / cover'}} >React Project #1</CardTitle>
                <CardText>wooooooooooooooooooooooooo</CardText>
                <CardActions border>
                  <Button colored>Github</Button>
                  <Button colored>Code</Button>
                  <Button colored>Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
              </Card>
            </div>

            <div className="projects-card">
              {/* Project 1*/}
              <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://arabiconline.eu/wp-content/uploads/2017/08/photo-960x675.jpg) center / cover'}} >React Project #1</CardTitle>
                <CardText>wooooooooooooooooooooooooo</CardText>
                <CardActions border>
                  <Button colored>Github</Button>
                  <Button colored>Code</Button>
                  <Button colored>Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
              </Card>

              </div>
          </Cell>
        </Grid>
      </div>

    )
  }
}
