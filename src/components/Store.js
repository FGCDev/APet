import React, { Component, lazy, Suspense } from 'react';
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
import './Store.css';
import dummy_data from '../res/dummy-test-store';


//Components
import EB from './ErrorBoundary';
import Pager from './Pager';

//Lazy Components
const Results = lazy(() => import('./StoreResults'));


//Main Class
class Store extends Component {
	//################################ State Space ################################
	state = { showControls: true, live_tests: [...dummy_data], current_tests: [...dummy_data], currentPage: null, totalPages: null, totalTests: 0, hasError: false }

	//################################ Method Space ################################
	//################################ LifeCycleMethods ################################
  componentDidMount(){
    //Load Init data.
		console.log(this.state);
	}
	//################################ Cutom Methods ################################
	// _toggleShowControls = (state) => {
	// 	setState()
	// }
	drawerToggleClickHandlerUser = () => {
		this.setState((prevState) => {
			return { showControls: !prevState.showControls };
		});
	};
	//################################xXxXxXxXxXxX Method Space Ends XxXxXxXxXxXx################################

  render(props) {
		//const match = this.props.match;
		let {
			showControls:
			live_tests,
			current_tests,
			currentPage,
			totalPages,
			totalTests
		} = this.state;
		//const totalTests = live_tests.length;
		let controller = this.state.showControls && (<EB>
		<div className="Store-Controls">
			<div>
					<h4 >Seach </h4>
					<input style={{width: '14vh', height: '4vh', backgroundColor: '#eeeeee', padding: '2px', color: '#2D65FF', fontFamily: 'Roboto', fontWeight: '700'}} type='text' placeholder="Enter Query Here"/>
			</div>
			<div>
					<h4>Filter Search</h4>
					<p>Recommended Tests</p>
					<p>No. of Questions</p>
					<p>Test Difficulty</p>
					<p>Year Published</p>
					<p>Test Duration</p>
					<p>Question Types</p>
					<p>Test Patterns</p>
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
		
    return (
			<div className="Store">
			{controller}
			
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
