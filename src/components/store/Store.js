import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Profile from '../nav/Profiler';
import { NavLink/*, withRouter*/ } from 'react-router-dom'

import logo from '../../res/imgs/ap_logo_inv.png';
import '../nav/navbar.css';

// const profile = (
	
// );

const StoreNavBar = props => {
	return (
		<div className="NavBar">
			<img className="logo" src={logo} alt="Logo for Aditya Publication © 2018" />
			<div className="links-container">
				<ul className="links-list">
					<li><NavLink className="Link" to="/">Home</NavLink></li>
					<li><NavLink className="Link" to="/Dashboard">Landing</NavLink></li>
				</ul>
			</div>
			<div className="profile">
				<Profile />
			</div>
		</div>
	)
}

StoreNavBar.propTypes = {

}

// export default StoreNavBar


export class Store extends Component {
	static propTypes = {
		prop: PropTypes
	}

	render() {
		let searchBar = (
			<div className={"SearchBar"}>

			</div>
			);

		let searchParams = [
			<p>Recommended Tests</p>,
			<p>No. of Questions</p>,
			<p>Test Difficulty</p>,
			<p>Year Published</p>,
			<p>Test Duration</p>,
			<p>Question Types</p>,
			<p>Test Patterns</p>,
		]
		let storeControls = (
			<div>
				{searchParams}
			</div>
		)
		
		return (
			<React.Fragment>
				{searchBar}
				{storeControls}
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Store)
