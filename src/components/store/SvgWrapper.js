import React from 'react'
import PropTypes from 'prop-types'

const SvgWrapper = props => {
	return React.createElement('div', {
		...props,
		style: { position: 'relative', ...(props.style || {}) }
	});
}

export default SvgWrapper
