import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import sort from '../../res/shapes/sort_optm.svg';
import SearchOps from './SearchOps';
import Hover from '../helpers/Hover';

export class Sorting extends PureComponent {
	static propTypes = {
		activeSort: PropTypes.string,
	}

	static defaultProps = {
		activeSort: "newest first",
	}

	render() {
		const { activeSort } = this.props;
		return (
			<React.Fragment>
				<Hover>{(hover) =>
					<div className="DropMenu Pointer">
						<img className="Icon Pointer" src={sort} alt="drop down menu for sorting search results" aria-label="drop down menu for sorting search results" />
						{hover &&
							<div className="DropOverflow">
								<p>I'm just a sorted list.</p>
							</div>
						}
					</div>
				}</Hover>

				<div className="SearchOpsTags"><SearchOps activeSort={activeSort} value={"Asc"} /></div>
			</React.Fragment>
		)
	}
}

export default Sorting

