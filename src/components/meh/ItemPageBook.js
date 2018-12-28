import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Assets

// Custom Components



//Main Class
class ItemPageBook extends Component {

	//################################ State Space ################################
	state = {}

	//################################ Method Space ################################
	//################################ LifeCycleMethods ################################
	componentDidMount() {
		//Load Init data.
	}

	//################################ Cutom Methods ################################

	//################################ Method Space Ends ################################

	render() {
		return (
			<div>

			</div>
		)
	}
}

ItemPageBook.PropTypes = {

}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(ItemPageBook)
