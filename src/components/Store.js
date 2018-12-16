import React, { Component, Lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
// import logo from './logo.svg';
import './store.css';

import {connect} from 'react-redux';
import {
  NavLink,
  Switch,
  Route, 
  withRouter
} from 'react-router-dom';

import dummy_data from '../res/dummy-test-store';

const Card = (props) => {
	let classy = "Card ";
	if (props.style) classy=classy.concat(props.style)
	return (
    <div className={classy}>
      <h4>{props.title}</h4>
    </div>
  );
};

Card.propTypes = {
	style: PropTypes.string,
	title: PropTypes.string.isRequired,
  // country: PropTypes.shape({
  //   cca2: PropTypes.string.isRequired,
  //   region: PropTypes.string.isRequired,
  //   name: PropTypes.shape({
  //     common: PropTypes.string.isRequired
  //   }).isRequired
  // }).isRequired
};

class StoreControl extends Component {
	state = {

	}
	render() {
		return (
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
		);
	}
}

// const mapStateToControlProps = state => {
//     //Stuff
    
//     return {
      
//     };
// };
//export default connect()(App);
//export connect(mapStateToControlProps)(StoreControl);

class Store extends Component {
	state = { live_tests: [], current_tests: [], currentPage: null, totalPages: null, totalTests: 0 }

  componentDidMount(){
    //Load Init data.
		//let live_tests = Object.values(dummy_data);
		let live_tests = dummy_data;
		//console.log(live_tests);
		this.setState(this.state.live_tests = Object.assign(live_tests));
		//console.log(this.state);
		let totalTests = this.state.live_tests.length;
		this.setState({totalTests});
  }
	
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
	
		if (totalTests === 0) return (<h1> Fetching Results... </h1>);
	
		// const headerClass = [
		// 	// "text-dark py-2 pr-4 m-0",
		// 	// currentPage ? "border-gray border-right" : ""
		// ].join(" ").trim();
    
    return (
      <div className="Store">
	      <StoreControl />
        <div className="Store-Results">
        	<Route path={`${match.path}/testCard`} component={Card}/>
						<h4>Test Selection Starts here</h4>
						<div className="Store-Results-Container">
                            {current_tests.map((test)=>
                                <Card
                                key={test.id} 
                                title={test.title} 
                                ques={test.num_questions} 
                                style={test.styler}/>)
                            }
						</div>
        </div>
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
