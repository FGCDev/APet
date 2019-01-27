import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class Hover extends Component {
	// static propTypes = {
	// 	prop: PropTypes
	// }

	state = {
		hovering: false
	}

	mouseOver = () => this.setState({ hovering: true });
	mouseOut = () => this.setState({ hovering: false });

	render() {
		return (
			<div style={{ height: 'inherit' }} onMouseOut={this.mouseOut} onMouseOver={this.mouseOver}>
				{this.props.children(this.state.hovering)}
			</div>
		)
	}
}

export default Hover;
