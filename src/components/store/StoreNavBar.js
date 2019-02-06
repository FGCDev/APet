import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link/*, withRouter*/ } from 'react-router-dom'
import { Formik } from 'formik';

import '../nav/navbar.css';
import logo from '../../res/imgs/ap_logo_inv.png';
// import logo from '../../res/shapes/ap-logo.svg';

import Profile from '../nav/Profiler';


export class StoreNavBar extends Component {
	static propTypes = {
		user: PropTypes.object,
		itemsInBag: PropTypes.number,
	}

	static defaultProps = {
		itemsInBag: 4,
	}

	render() {
		return (
			<React.Fragment>
				<header className="NavBar">
					<Link className="logoContainer" to="/"><img className="logo" src={logo} alt="Logo for Aditya Publication © 2018" /></Link>
					<div className="links-container">
						{/* searchFeild */
							<Link style={{ display: 'flex', color: "#FFFFFF", padding: '4px', }} to="/users/checkout">
								<div> Your Bag </div>
								<div className='count'>
									{this.props.itemsInBag}
								</div>
							</Link>}
					</div>
					<Link className="Link" to="/Dashboard"><Profile min={true} /></Link>
				</header>
			</React.Fragment>
		)
	}
}

export default StoreNavBar
