import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'



export class Pager extends Component {
	// constructor(props) {
	// 	super()
	// 	this.state = { current_list: props.data, msg: "Hi i'm pager" }
	// }

	static propTypes = {
		data: PropTypes.array.isRequired,
		perPage: PropTypes.number.isRequired,
		currentPage: PropTypes.number.isRequired,
	}

	static defaultProps = {
		currentPage: 1,
		perPage: 11,
	}

	state = {
		searchResults: this.props.data,
		list: null,
		perPage: this.props.perPage,
		currentPage: this.props.currentPage,
		msg: "Hi i'm pager",
		clickerCount: 0
	}

	messenger = () => {
		console.log(this.state.msg);
	}

	pageChanger = (page) => {
		const { perPage, searchResults } = this.state;
		// const list = this.state.searchResults;
		let newList = searchResults.slice((page - 1) * perPage, page * perPage);

		this.setState((state) => ({
			...state,
			list: newList
		}))
	}

	componentDidMount() {
		this.pageChanger(this.state.currentPage);
	}

	componentDidUpdate(prevProps) {
		if(this.state.currentPage !== prevProps.currentPage)
			this.pageChanger(this.state.currentPage);
	}

	// pageMaker = () => {

	// }

	render() { 
		return this.props.children(this.state) 
	}
}

// const mapStateToProps = (state) => ({
// 	
// })

// const mapDispatchToProps = {

// }

//export default connect(mapStateToProps, mapDispatchToProps)(Pager)
export default Pager;
