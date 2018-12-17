import React, { Component, Lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  NavLink,
  Switch,
  Route, 
  withRouter
} from 'react-router-dom';
//Assets
// import logo from './logo.svg';
import './store.css';
import dummy_data from '../res/dummy-test-store';


//Components
import EB from './ErrorBoundary';
import Pager from './Pager';

//Lazy Components
const Results = React.lazy(() => import('./StoreResults'));


//Main Class
class Store extends Component {
	//################################ State Space ################################
	state = { live_tests: [...dummy_data], current_tests: [...dummy_data], currentPage: null, totalPages: null, totalTests: 0, hasError: false }

	//################################ Method Space ################################
	//################################ LifeCycleMethods ################################
  componentDidMount(){
    //Load Init data.
		console.log(this.state);
	}
	//################################ Cutom Methods ################################

	//################################ Method Space Ends ################################
	
  render(props) {
		const match = this.props.match;
		let {
			live_tests,
			current_tests,
			currentPage,
			totalPages,
			totalTests
		} = this.state;
		//const totalTests = live_tests.length;
    
    return (
			<div className="Store">
			<EB>
			<div className="Store-Controls">
				I control Stuff <br /> *evil laugh*
				<div>
						<h4>Seach</h4>
						<input type='text'/>
				</div>
				<div>
						<h4>Filter</h4>
						<p>Num Questions</p>
						<p>Difficulty</p>
						<p>Year</p>
						<p>Time Recommended</p>
						<p>Question Types</p>
						<p>Test Patterns</p>
				</div>
				<div>
						<h4>Sort</h4>
						<p>Num Questions</p>
						<p>Difficulty</p>
						<p>Price</p>
				</div>
			</div>
			</EB>
			<Suspense fallback={(<h3>Loading Results...</h3>)}>
			<EB>
				{ current_tests && <Pager data={current_tests}>
						{paging => (
							<React.Fragment>
								<Results results={paging}/>
							</React.Fragment>
						)}
					</Pager>}
			</EB>
			</Suspense>
      </div>
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
