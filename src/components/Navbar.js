import React from 'react'
import { Component } from 'react'
import { Link } from 'react-scroll';
import '../styles/NavbarStyles.css'
import CottageIcon from '@mui/icons-material/Cottage';

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() 
  {
    return (
      <nav>
        <a href="/">
          <CottageIcon fontSize='large'/>
        </a>
        <div>
          <ul id="navbar" className={this.state.clicked ? "#navbar active" : "navbar"}>
            <li> 
              <Link
                to='home'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link> 
            </li>
            <li> 
              <Link
                to='work'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Work
              </Link> 
            </li>
            <li> 
              <Link
                to='projects'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link> 
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={this.handleClick}>
          <i id ="bar"
          className={this.state.clicked ? 
          "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </nav>
    );
  }
}

export default Navbar