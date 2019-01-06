import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StoreCard from './StoreCard'

import './StoreCard.css';
import dummyData from '../../res/dummy-test-store'

export class Results extends Component {
  static propTypes = {
    results: PropTypes.array,
  }

  static defaultProps = {
    results: dummyData
  }
  render() {
    const { results } = this.props;
    return (
      <div className="ResultsContainer">
        {
          results.map((test, i) =>
							<StoreCard
								key={i}
								title={test.title}
								ques={test.num_questions}
								style={test.styler}
								cover={test.coverURL}
								level={test.level}
								type={test.type}
								price={test.price}
								updated={test.updated} />
						)
        }
      </div>
    )
  }
}

export default Results
