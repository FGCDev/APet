import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Pager extends Component {
	constructor(props) {
		super()
		this.state = { current_list: props.data, msg: "Hi i'm pager" }
	}

	// state = {

	// }
	static propTypes = {
		data: PropTypes.array.isRequired
	}

	render() {
		let styleClass = "pager ";

		const { msg } = this.state

		return (
			<React.Fragment>
				{this.props.children(this.state.current_list)}
				<div className={styleClass}>
					<h3>{msg}</h3>
				</div>
			</React.Fragment>
		)
	}
}

// const mapStateToProps = (state) => ({
// 	
// })

// const mapDispatchToProps = {

// }

//export default connect(mapStateToProps, mapDispatchToProps)(Pager)
export default Pager;
