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
  componentDidMount () {
    console.log(this.props.results);
  }
  render() {
    const { results } = this.props;
    return (
      <div className="ResultsContainer">
        {
          results.map((test, i) =>
							<StoreCard
                key={i}
                obj={test} />
						)
        }
      </div>
    )
  }
}

export default Results
