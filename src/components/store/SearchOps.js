import React from 'react'
import PropTypes from 'prop-types'

import add from '../../res/shapes/baseline-add-w-o.svg';
import clear from '../../res/shapes/baseline-clear-w-o.svg';

const SearchOps = props => {
	return (
		<div className="FilterIndicator" /*onClick=(() => funtion to toggle the filer*/>
			{props.label + ": " + props.value + " "}
			{(props.value === 0) ? <img className="FilterAction" alt="button to add the filter" src={add} /> : <img className="FilterAction" alt="button to clear the filter" src={clear} />}
		</div>
	)
}

SearchOps.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string,
}
SearchOps.defaultProps = {
	label: 'Filter',
	value: "2",
}

export default SearchOps