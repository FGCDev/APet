import React from 'react'
import PropTypes from 'prop-types'
import Filter from './Filter';
import Sorting from './Sorting';

import './SearchBar.css'

const SearchBar = props => {
    // const propLogger = (
	// 	<p>{JSON.stringify(props)}</p>
	// )

	return	(
		<div className="SearchBar">
			<Filter />
			<Sorting />
		</div>
	)
}

SearchBar.propTypes = {
	filters: PropTypes.array,
	activeFilters: PropTypes.array,
	sortOpts: PropTypes.array,
	activeSort: PropTypes.string,
	sortOrder: PropTypes.bool,
}

SearchBar.defaultProps = { }

export default SearchBar