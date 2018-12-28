import React, { Component, Suspense } from 'react'
import PropTypes from 'prop-types'
import { Img } from 'the-platform';
import { NavLink/*, withRouter*/ } from 'react-router-dom';

import './NavBar.css';
import logo from '../res/imgs/ap_logo_inv.png';
import hero from '../res/imgs/hero.jpg';
import land1 from '../res/imgs/land1.jpg';


import Profile from './Profiler';
import Loader from './Loader';

const heropath = "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/hero.jpg";
const land1parth = "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/land1.jpg";
const land2parth = "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/land1.jpg";
const land3parth = "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/land1.jpg";

const profile = (
  <div className="profile">
    <Profile />
  </div>
);

const NavBar = props => {
  return (
    <div className="NavBar Landing">
      <img className="logo" src={logo} alt="Logo for Aditya Publication © 2018" />
      <div className="links-container">
        <ul className="links-list">
          <li><NavLink className="Link" to="/">Home</NavLink></li>
          <li><NavLink className="Link" to="/landed">Landing</NavLink></li>
          <li><NavLink className="Link" to="/store">Store</NavLink></li>
        </ul>
      </div>
      {profile}
    </div>
  )
}

NavBar.propTypes = {

}

class Landing extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <div className="Hero">
          <NavBar />
          <Suspense fallback={(<img className="loaded" src={ hero } alt="The mission of AP" />)}>
					  <Img className="loaded" src={ heropath } alt="The mission of AP" />
				  </Suspense>
        </div>
        <div className="Why">

        </div>
        <div className="How">

        </div>
        <div className="What">

        </div>
        <div className="Features">

        </div>
        <div className="Footer">

        </div>
      </div>
    )
  }
}

export default Landing
