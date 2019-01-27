import React, { Component } from 'react'
import PropTypes from 'prop-types'

import filter from '../../res/shapes/filter_optm.svg';
import SearchOps from './SearchOps';
import Hover from '../helpers/Hover';

const actfil = [
	{ label: 'active filters', value: 'Y' },
	{ label: 'act filters', value: '4'  },
	// { label: 'active fils' },
];

export class Filter extends Component {
	static propTypes = {
		activeFilters: PropTypes.array,
	}

	static defaultProps = {
		activeFilters: actfil,
	}

	state = {
		hovering: false,
	}

	render() {
		const { activeFilters } = this.props;
		return (
			<React.Fragment>
				<Hover>{(hover) => 
					<div className="DropMenu Pointer">
						<img className="Icon Pointer" src={filter} alt="drop down menu for filtering search results" />
						{hover &&
							<div className="DropOverflow">
								<p>I'm just a Filtered list.</p>
							</div>
						}
					</div>
				}</Hover>

				<div className="SearchOpsTags">
					{activeFilters.map((filt, i) =>
						<SearchOps key={i} label={filt.label} value={filt.value} />
					)}
				</div>
			</React.Fragment>
		)
	}
}

export default Filter