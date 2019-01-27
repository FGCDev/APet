import React, { Suspense, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
	// NavLink,
	withRouter
} from 'react-router-dom';
import { Img } from 'the-platform';

import EB from '../helpers/ErrorBoundary';
import Loader from '../helpers/Loader';
import StoreCard from '../store/StoreCard';
import handleInitialStoreData from './../../actions/index.js';

// const Card = (props) => {
// 	let classy = "Card ";
// 	let classyinfo = "Card-Info ";
// 	//if (props.style) classy = classy.concat(props.style)
// 	return (
// 		<div className={classy}>
// 			<div style={{ height: '28vh' }}>
// 				<Suspense fallback={(<Loader className="previewtext" text="Getting Your Image" />)}>
// 					<Img className="loaded" src={props.cover} alt="Cover of the book" />
// 				</Suspense>
// 			</div>
// 			<div className={classyinfo}>
// 				<h4>{props.title}</h4>
// 			</div>
// 		</div>
// 	);
// };

// Card.propTypes = {
// 	title: PropTypes.string.isRequired,
// 	id: PropTypes.string,
// 	ques: PropTypes.number,
// 	style: PropTypes.string,
// 	cover: PropTypes.string,
// 	level: PropTypes.string,
// 	type: PropTypes.string,
// 	price: PropTypes.string,
// 	updated: PropTypes.string,
// 	// country: PropTypes.shape({
// 	//   cca2: PropTypes.string.isRequired,
// 	//   region: PropTypes.string.isRequired,
// 	//   name: PropTypes.shape({
// 	//     common: PropTypes.string.isRequired
// 	//   }).isRequired
// 	// }).isRequired
// };

export class StoreResults extends PureComponent {

	//Method Space

	//LifeCycle Methods
	componentDidMount() {
		//console.log("[StoreResults.js] props are: ", this.props);
		this.props.handle("maths");
	}

	componentDidCatch() {

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
						{this.props.booksArray.map((test, i) =>
							<StoreCard
								key={i}
								title={test.title}
								ques={test.num_questions}
								style={test.styler}
								cover={test.coverURL}
								level={test.level}
								type={test.type}
								price={test.price}
								updated={test.updated} />
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
	booksArray: Object.values(state.store),

})

const mapDispatchToProps = dispatch => ({
	handle: message => dispatch(handleInitialStoreData(message)),

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StoreResults));