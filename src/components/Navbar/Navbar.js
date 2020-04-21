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
      <div id="container-nav">
          <Layout>
              <Header title=' ' className="header-navbar" scroll>
                  <Navigation>
                    <li>
                      <a href="/" id="testing">{this.state.titles.resume}</a>
                    </li>

                    <li>
                      <a href="#about_me_tab">{this.state.titles.about}</a>
                    </li>

                    <li>
                      <a href="#projects_tab">{this.state.titles.projects}</a>
                    </li>

                    <li>
                      <a href="#contact_me_tab">{this.state.titles.contact}</a>
                    </li>
                  </Navigation>
              </Header>
          </Layout>

      </div>
    )
  }
}
