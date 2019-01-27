import React from 'react'
import PropTypes from 'prop-types'
import { Link/*, withRouter*/ } from 'react-router-dom'

import './BagFab.css';
import bag from '../../res/shapes/shopping-bag.svg';

const BagFab = props => {
	return (
		<Link className="Fab" to="/store/checkout">
			<span className="Indicator">{props.itemsInBag}</span>
			<img className="Bag" src={bag} alt="button to show your shopping bad details and take you ot the checkout screen" />
		</Link>
	)
}

BagFab.propTypes = {
	user: PropTypes.object,
	items: PropTypes.array,
	itemsInBag: PropTypes.number,
}

BagFab.defaultProps = {
	itemsInBag: 4,
}

export default BagFab
