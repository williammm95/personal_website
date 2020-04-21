import React from 'react';
import './Contactme.css';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

export class Contactme extends React.Component {
  render() {
    return (
      <div className="container-contactme">
      <h2 id="contact_me_tab">Contact WILLIAM</h2>
      <hr/>
        <Grid className="contactme-grid">

              <Cell col={3}>
                <List>
                  <ListItem>
                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                      <i id="icon_style" className="fa fa-whatsapp fa-2x" aria-hidden="true"/>
                         <a href="https://wa.me/6588173045" target="_blank" rel="noopener noreferrer" >WHATSAPP</a>
                      </ListItemContent>
                  </ListItem>
                </List>
              </Cell>

              <Cell col={3}>
                <List>
                  <ListItem>
                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                      <i id="icon_style" className="fa fa-telegram fa-2x" aria-hidden="true"/>
                         <a href="https://t.me/Williammm95" target="_blank" rel="noopener noreferrer">TELEGRAM</a>
                      </ListItemContent>
                  </ListItem>
                </List>
              </Cell>

              <Cell col={3}>
                <List>
                  <ListItem>
                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                      <i id="icon_style" className="fa fa-envelope fa-2x" aria-hidden="true"/>
                      <a href="williamyay95@gmail.com" target="_blank" rel="noopener noreferrer">EMAIL</a>
                      </ListItemContent>
                  </ListItem>
                </List>
              </Cell>

        </Grid>
      </div>
    )
  }
}
