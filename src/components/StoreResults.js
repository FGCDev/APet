import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  NavLink,
  withRouter
} from 'react-router-dom';


import EB from './ErrorBoundary';

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

export class StoreResults extends PureComponent {

	//Method Space

	//LifeCycle Methods
	componentDidMount () {
		console.log("[StoreResults.js] props are: ",this.props);
	}

	componentDidCatch () {

	}
	//Method Space ends

  render() {
    let stylingClasses = "Store-Results-Component ";
		if (this.props.style) stylingClasses = stylingClasses.concat(this.props.style)
				// const headerClass = [
				// 	// "text-dark py-2 pr-4 m-0",
				// 	// currentPage ? "border-gray border-right" : ""
				// ].join(" ").trim();

		// if (totalTests === 0) return (<h1> Fetching Results... </h1>);
		// <Route path={`${props.match.path}/testCard`} component={Card}/>
		// let msg = "";
		// switch(){
		// 	case this.props.
		// }
		
		return (
		<div className={stylingClasses}>
			<h3>Showing Results for: {}</h3>
			<EB>
			<div className="Store-Results-List">
				{this.props.results.map((test) =>
					<Card
					key={test.id} 
					title={test.title} 
					ques={test.num_questions} 
					style={test.styler}/>
				)}
			</div>
			</EB>
		</div>
	);
  }
}

StoreResults.propTypes = {
	style: PropTypes.string,
	results: PropTypes.array.isRequired,
  // country: PropTypes.shape({
  //   cca2: PropTypes.string.isRequired,
  //   region: PropTypes.string.isRequired,
  //   name: PropTypes.shape({
  //     common: PropTypes.string.isRequired
  //   }).isRequired
  // }).isRequired
};

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StoreResults));
