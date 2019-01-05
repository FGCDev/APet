import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { Img } from 'the-platform';
import Loader from '../helpers/Loader';

// import dummy_img from '../res/imgs/Champ_Small.png';

const dpLQ = 'https://images.unsplash.com/profile-fb-1545496572-b49e6d85b824.jpg?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff';
const dpHQ = 'https://images.unsplash.com/profile-fb-1545496572-b49e6d85b824.jpg?dpr=2&auto=format&fit=crop&w=300&h=300&q=60&crop=faces&bg=fff';

const Profiler = props => {
	return (
		<React.Fragment>
			<div className="dpcontainer">
				<Suspense fallback={<img className="dp preview" src={dpLQ} alt="user's avatar is shown here"/> || (<Loader>Getting avatar...</Loader>)}>
					<Img className="dp loaded" src={dpHQ} alt="user's avatar is shown here" />
				</Suspense>
			</div>

			<div className="profile-info">
				<h3>Johnathan Doe</h3>
				<h4>Class XI</h4>
			</div>
		</React.Fragment>
	)
}

Profiler.propTypes = {
	name: PropTypes.string,
	userType: PropTypes.string,
	picURL: PropTypes.string,
}

export default Profiler