import React, { /*Suspense*/ } from 'react'
import PropTypes from 'prop-types'

const ReviewItems = props => {
	return (
		<div>
			<span style={{ fontStyle: "italic" }}>{'"' + props.review + '"'}</span> by {props.author}<hr />
		</div>
	)
}

ReviewItems.propTypes = {
	review: PropTypes.string,
	rating: PropTypes.string,
	author: PropTypes.string,
	dated: PropTypes.string,
}

ReviewItems.defaultProps = {
	review: "I'm just a simple review",
	rating: "9",
	author: "Jonathan Dovious",
	dated: '5th Feb 2019',
}
// export default ReviewItems

const ReviewsContainer = props => {
	return (
		<section className="ItemReviewsContainer">
			<h2>User Reviews ({props.itemReviews.length})</h2>
			<div className="ItemReviewsLayout">
				{props.itemReviews.map((rev, id) => <ReviewItems review={rev.review} key={id} />)}
			</div>
		</section>
	)
}

ReviewsContainer.propTypes = {
	itemReviews: PropTypes.array,
}

ReviewsContainer.defaultProps = {
	itemReviews: [
		{ 'review': 'Are you ready for some awesome Reviews?????', 'rating': '', 'author': '', 'dated': '' },
		{ 'review': 'Are you really sure?', 'rating': '', 'author': '', 'dated': '' },
		{ 'review': 'You really need to learn the art of NGAF', 'rating': '', 'author': '', 'dated': '' },
		{ 'review': 'You should go learn from the great oyu...', 'rating': '', 'author': '', 'dated': '' },
		{ 'review': 'Why are you still here. Just go.', 'rating': '', 'author': '', 'dated': '' },
		{ 'review': 'NOW!!!', 'rating': '', 'author': '', 'dated': '' },
	]
}

export default ReviewsContainer
