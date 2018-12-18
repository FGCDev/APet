import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

import './NavBar.css';
import logo from '../res/imgs/ap_logo_inv.png';
import dummy_img from '../res/imgs/Champ_Small.png';

const Profile = () => {
	return (
		<React.Fragment>
			<div className="dpcontainer">
				<Suspense fallback={(<p>Getting avatar...</p>)}>
					<img className="dp" src={dummy_img} alt="user's avatar is shown here" />
				</Suspense>
			</div>

			<div className="profile-info">
				<h3>Johnathan Doe</h3> 
				<h4>Class XI</h4>
			</div>
		</React.Fragment>
	);
};

class NavBar extends Component {

	componentDidMount() {
		//Load Init data.
	}

	render() {
		return (
			<div className="NavBar">
				<img className="logo" src={logo} alt="Logo for Aditya Publication © 2018" />
				<div className="links-container">
					<ul className="links-list">
						<li><NavLink className="Link" to="/">Home</NavLink></li>
						<li><NavLink className="Link" to="/landed">Landing</NavLink></li>
						<li><NavLink className="Link" to="/store">Store</NavLink></li>
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