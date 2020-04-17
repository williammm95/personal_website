import React from 'react';
import './Navbar.css';
import { Layout, Header, Navigation } from 'react-mdl';


export class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      titles: {
        resume: 'resume',
        about: 'about me',
        projects: 'projects',
        contact: 'contact me',
      }
    })
  }
  render() {
    return (
      <div id="nav">
          <Layout className="test">
              <Header title=' ' className="navbar" scroll>
                  <Navigation>
                    <li>
                      <a href="/" className="disabled">{this.state.titles.resume}</a>
                    </li>

                    <li>
                      <a href="/" className="disabled">{this.state.titles.about}</a>
                    </li>

                    <li>
                      <a href="#projects" style={{textDecoration: 'none'}}>{this.state.titles.projects}</a>
                    </li>

                    <li>
                      <a href="#contact_me" style={{textDecoration: 'none'}}>{this.state.titles.contact}</a>
                    </li>
                  </Navigation>
              </Header>
          </Layout>

      </div>
    )
  }
}
