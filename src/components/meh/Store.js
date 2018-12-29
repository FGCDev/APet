import React, { Component, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	NavLink,
	// Switch,
	// Route,
	withRouter
} from 'react-router-dom';

//Assets
// import logo from './logo.svg';
import '../nav/navbar.css';
import './Store.css';
import dummy_data from '../../res/dummy-test-store';


//Components
import EB from '../helpers/ErrorBoundary';
import Pager from '../Pager';


import logo from '../../res/imgs/ap_logo_inv.png';


import Profile from '../Profiler';

const profile = (
	<div className="profile">
		<Profile />
	</div>
);


const NavBar = props => {
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
			{profile}
		</div>
	)
}

NavBar.propTypes = {
	user: PropTypes.string,
}
//Lazy Components
const Results = lazy(() => import('./StoreResults'));

// let searchArgs = [
// 	'Recommended Tests',
// 	'No. of Questions',
// 	'Test Difficulty',
// 	'Year Published',
// 	'Test Duration',
// 	'Question Types',
// 	'Test Patterns'
// ]
let searchParams = [
	<p>Recommended Tests</p>,
	<p>No. of Questions</p>,
	<p>Test Difficulty</p>,
	<p>Year Published</p>,
	<p>Test Duration</p>,
	<p>Question Types</p>,
	<p>Test Patterns</p>,
]
//Main Class
class Store extends Component {
	//################################ State Space ################################
	state = { live_tests: dummy_data, currentPage: 1, totalPages: null, totalTests: 0, hasError: false, showControls: true }

	//################################ Method Space ################################
	//################################ LifeCycleMethods ################################
	componentDidMount() {
		console.log(this.state);
	}
	//################################ Cutom Methods ################################
	// _toggleShowControls = (state) => (setState())
	// }
	// drawerToggleClickHandlerUser = () => {
	// 	this.setState((prevState) => {
	// 		return { 
	// 			...prevState,
	// 			showControls: !prevState.showControls };
	// 	});
	// };
	//################################xXxXxXxXxXxX Method Space Ends XxXxXxXxXxXx################################

	render() {
		//const match = this.props.match;
		let {
			showControls:
			live_tests,
			// current_tests,
			// currentPage,
			// totalPages,
			// totalTests
		} = this.state;

		let controller = this.state.showControls && (<EB>
			<div className="Store-Controls">
				<div>
					<h4 >Search </h4>
					<input style={{ width: '14vh', height: '4vh', backgroundColor: '#eeeeee', padding: '2px', color: '#2D65FF', fontFamily: 'Roboto', fontWeight: '700' }} type='text' placeholder="Enter Query Here" />
				</div>
				<div>
					<h4>Filter Search</h4>
					{searchParams}
				</div>
				<div>
					<h4>Sort Results</h4>
					<p>Num Questions</p>
					<p>Difficulty</p>
					<p>Price</p>
				</div>
				I control Stuff <br /> *evil laugh*
		</div>
		</EB>);

		let page = 1;
		return (
			<React.Fragment>
				<EB><NavBar /></EB>
				<div className="Store">
					{controller}

					<Suspense fallback={(<h3>Loading Results...</h3>)}>
						<EB>
							{(live_tests.length !== 0) && <Pager resultData={live_tests} perPage={10} currentPage={page}>
								{paging => (
									<React.Fragment>
										<Results results={paging.list} />
										{console.log(paging)}
										<button onClick={() => page=page+1
											}>Next Page</button>
									</React.Fragment>
								)}
							</Pager>}
						</EB>
					</Suspense>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	//Stuff
	return {

	};
};
//export default connect()(App);
export default withRouter(connect(mapStateToProps)(Store));


// this.setState((prevState) => ({
// 	...prevState,
// 	currentPage: paging.currentPage + 1,
// 	clickerCount: paging.clickerCount + 1
// }))