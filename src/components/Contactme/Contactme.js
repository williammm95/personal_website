import React from 'react';
import './Contactme.css';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

export class Contactme extends React.Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={12}>
            <h2 id="contact_me">Contact me</h2>
            <hr/>
            <div>
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i id="icon_style" className="fa fa-whatsapp fa-2x" aria-hidden="true" style={{margin: '20px'}}/>
                       <a href="https://wa.me/6588173045" target="_blank" rel="noopener noreferrer" >WHATSAPP</a>
                    </ListItemContent>
                </ListItem>
              </List>
            </div>

            <div>
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i id="icon_style" className="fa fa-telegram fa-2x" aria-hidden="true" style={{margin: '20px'}}/>
                       <a href="https://t.me/Williammm95" target="_blank" rel="noopener noreferrer">TELEGRAM</a>
                    </ListItemContent>
                </ListItem>
              </List>
            </div>

            <div>
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i id="icon_style" className="fa fa-weixin fa-2x" aria-hidden="true" style={{margin: '20px'}}/>
                       <a href="weixin://dl/chat?{williamyeee}" target="_blank" className="disabled" rel="noopener noreferrer">WECHAT</a>
                    </ListItemContent>
                </ListItem>
              </List>
            </div>

            <div>
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i id="icon_style" className="fa fa-envelope fa-2x" aria-hidden="true" style={{margin: '20px'}}/>
                    <a href="williamyay95@gmail.com" target="_blank" rel="noopener noreferrer">EMAIL</a>
                    </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>

        </Grid>
      </div>
    )
  }
}
