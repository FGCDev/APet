import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Loader extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  static defaultProps = {
    text: 'Loading'
  }

  state = {
      text: this.props.text
  }

  componentDidMount() {
    const stopper = '. . . ' + this.props.text + ' . . .'
    this.interval = setInterval(() => {
        this.state.text === stopper
        ? this.setState(() => ({ text: this.props.text}))
        : this.setState(({ text }) => ({ text: '. ' + text + ' .'}))
    }, 280)
  }
  
  componentWillUnmount() {
    window.clearInterval(this.interval)
  }
  
  render() {
    return (
      <div style={{display: 'flex', alignItems: 'centre', justifyContent: 'space-around'}}>
        <h5>{this.state.text}</h5>
      </div>
    )
  }
}

export default Loader