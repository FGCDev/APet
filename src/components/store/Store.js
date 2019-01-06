import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Profile from '../nav/Profiler';
import { Link/*, withRouter*/ } from 'react-router-dom'
import { Formik } from 'formik';

import logo from '../../res/imgs/ap_logo_inv.png';
import filter from '../../res/shapes/filter_optm.svg';
import sort from '../../res/shapes/sort_optm.svg';
import '../nav/navbar.css';
import '../store/store.css';
import Results from './Results';

const StoreNavBar = props => {
	return (
		<React.Fragment>
			<div className="NavBar">
				<Link className="logoContainer" to="/"><img className="logo" src={logo} alt="Logo for Aditya Publication © 2018" /></Link>
				<div className="links-container">
					<Formik>

					</Formik>
				</div>
				<Link className="Link" to="/Dashboard"><Profile min={true} /></Link>
			</div>
			<div className="SearchBar">
				<img className="Icon" src={filter} alt="drop down menut for filtering search results" />
				<hr />
				<img className="Icon" src={sort} alt="drop down menut for sorting search results" />
			</div>
		</React.Fragment>

	)
}

StoreNavBar.propTypes = {

}

// export default StoreNavBar


export class Store extends Component {
	static propTypes = {
		user: PropTypes.object,
	}

	render() {
		// let searchBar = (
		// 	<React.Fragment>


		// 	</React.Fragment>

		// );

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
			<aside className="SidePanel">
				{searchParams}
			</aside>
		)

		return (
			<React.Fragment>
				<StoreNavBar />
				<div className="Results">
					{storeControls}
					<Results />
				</div>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Store)
