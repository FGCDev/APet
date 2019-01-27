import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// import Profile from '../nav/Profiler';
// import { Link/*, withRouter*/ } from 'react-router-dom'
// import { Formik } from 'formik';

// import logo from '../../res/imgs/ap_logo_inv.png';
// import filter from '../../res/shapes/filter_optm.svg';
// import sort from '../../res/shapes/sort_optm.svg';
// import bag from '../../res/shapes/shopping-bag.svg';
// import add from '../../res/shapes/baseline-add-w-o.svg';
// import clear from '../../res/shapes/baseline-clear-w-o.svg';

import './Store.css';
import './SearchBar.css'

import handleInitialStoreData from './../../actions/index.js';
import dummyData from '../../res/dummy-test-store';
// import logo from '../../res/imgs/ap_logo_inv.png';
// import filter from '../../res/shapes/filter_optm.svg';
// import sort from '../../res/shapes/sort_optm.svg';

import Results from './Results';
import StoreNavBar from './StoreNavBar';
// import SearchBar from './SearchBar';
// import SearchOps from './SearchOps';
import Filter from './Filter';
import Sorting from './Sorting';
import BagFab from './BagFab';

const itemsInBag = 4;

const SearchBar = props => {
	const propLogger = (
		<p>{JSON.stringify(props)}</p>
	)

	return	(
		<div className="SearchBar">
			<Filter />
			<Sorting />
		</div>
	)
}

SearchBar.propTypes = {
	filters: PropTypes.array,
	activeFilters: PropTypes.array,
	sortOpts: PropTypes.array,
	activeSort: PropTypes.string,
	sortOrder: PropTypes.bool,
}

SearchBar.defaultProps = { }



export class Store extends Component {
	static propTypes = {
		user: PropTypes.object,
	}
	componentDidMount() {
		//console.log("[StoreResults.js] props are: ", this.props);
		this.props.handle("maths");
	}

	render() {
		let searchParams = [
			<h3>Advanced Filters</h3>,
			<p>Recommended Tests</p>,
			<p>No. of Questions</p>,
			<p>Test Difficulty</p>,
			<p>Year Published</p>,
			<p>Test Duration</p>,
			<p>Question Types</p>,
			<p>Test Patterns</p>,
			<br />,
			<h3>Trending</h3>,
			<p>Recommended Tests</p>,
			<p>No. of Questions</p>,
			<p>Test Difficulty</p>,
		]
		let storeControls = (
			<aside className="SidePanel">
				{searchParams}
			</aside>
		)

		return (
			<React.Fragment>
				<StoreNavBar itemsInBag={itemsInBag}/>
				<SearchBar />
				<div className="Results">
					{storeControls}
					<Results results={this.props.booksArray}/>
				</div>
				<BagFab itemsInBag={itemsInBag}/>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => ({
	booksArray: Object.values(state.store),
})

const mapDispatchToProps = dispatch => ({
	handle: message => dispatch(handleInitialStoreData(message)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Store)


// const searchFeild = (
// 	<Formik initialValues={user /** { email, social } */}
// 		onSubmit={(values, actions) => {
// 			MyImaginaryRestApiCall(user.id, values).then(
// 				updatedUser => {
// 					actions.setSubmitting(false);
// 					updateUser(updatedUser);
// 					onClose();
// 				},
// 				error => {
// 					actions.setSubmitting(false);
// 					actions.setErrors(transformMyRestApiErrorsToAnObject(error));
// 					actions.setStatus({ msg: 'Set some arbitrary status or data' });
// 				});
// 			}}
// 		render={({ errors, status, touched, isSubmitting }) => (
// 			<Form>
// 				<Field type="email" name="email" />
// 				{errors.email && touched.email && <div>{errors.email}</div>}
// 				<Field type="text" name="social.facebook" />
// 				{errors.social.facebook &&
// 					touched.social.facebook && <div>{errors.social.facebook}</div>}
// 				<Field type="text" name="social.twitter" />
// 				{errors.social.twitter &&
// 					touched.social.twitter && <div>{errors.social.twitter}</div>}
// 				{status && status.msg && <div>{status.msg}</div>}
// 				<button type="submit" disabled={isSubmitting}>
// 					Submit
// 						</button>
// 			</Form>
// 		)} 
// />);



// const StoreNavBar = props => {
	
// 	return (
// 		<React.Fragment>
// 			<div className="NavBar">
// 				<Link className="logoContainer" to="/"><img className="logo" src={logo} alt="Logo for Aditya Publication © 2018" /></Link>
// 				<div className="links-container">
// 					{/* searchFeild */<Link style={{color: "#FFFFFF"}} to="/users/checkout">Your Bag <span style={{minWidth: '40px', minHeight: '40px', backgroundColor: "#324a5c", padding: '4px', borderRadius: '50%' }}>{itemsInBag}</span></Link>}
// 				</div>
// 				<Link className="Link" to="/Dashboard"><Profile min={true} /></Link>
// 			</div>
// 		</React.Fragment>
// 	)
// }

// StoreNavBar.propTypes = {
// 	user: PropTypes.object,
// }

// StoreNavBar.defaultProps = {}
// // export default StoreNavBar

// import React from 'react'
// import PropTypes from 'prop-types'

// const BagFab = props => {
// 	return (
// 		<Link className="Fab" to="/store/checkout">
// 			<span className="Indicator">{itemsInBag}</span>
// 			<img className="Bag" src={bag} alt="button to show your shopping bad details and take you ot the checkout screen" />
// 		</Link>
// 	)
// }

// BagFab.propTypes = {
// 	user: PropTypes.object,
// 	items: PropTypes.array,
// }
// export default BagFab