import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import '../nav/navbar.css';

const StoreNavBar = props => {
	return (
		<div>
			
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
