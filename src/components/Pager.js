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
			<div style={{display: 'flex', flexDirection:'column', alignItems: 'center', width: 'inherit'}} className="Store-Results-Controller">
				{ this.props.children(this.state.current_list) }
				< div className = { styleClass } >
					<h3>{msg}</h3>
				</div >
			</div >
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
