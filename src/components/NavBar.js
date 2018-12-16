import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

import './NavBar.css';
import logo from '../res/imgs/ap_logo.png';

const Profile = () => {
    return(
        <React.Fragment>
            <p>John Doe</p>
        </React.Fragment>
    );
};

class NavBar extends Component {

    componentDidMount(){
      //Load Init data.
    }
  
    render() {
      return (
        <div className="NavBar">
            <img className="logo" src={logo} alt="Logo for Aditya Publication © 2018"/>  
            <div className="links">
                <ul className="links-list">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/landed">Landing</NavLink></li>
                    <li><NavLink to="/store">Store</NavLink></li>
                </ul>
            </div>
            <div className="profile">
                <Profile />
            </div>
        </div>
      );
    }
  }
  
const mapStateToProps = state => {
    //STuff

    return {
        
    };
};
export default connect(mapStateToProps)(NavBar);
//export default withRouter(connect(mapStateToProps)(NavBar));