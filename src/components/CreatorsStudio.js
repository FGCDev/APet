import React, { Component, /*Suspense*/ } from 'react';
var PropTypes = require('prop-types');
//import logo from './logo.svg';
import './CS.css';

import { connect } from 'react-redux';

class CreatorsStudio extends Component {
    constructor(props) {
    super(props);
    this.state = {
      username: ''
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    //Load Init data.
  }

  // handleChange(event) {
  //   var value = event.target.value;

  //   this.setState(function () {
  //     return {
  //       username: value
  //     }
  //   });
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

CreatorsStudio.propTypes = {
  // id: PropTypes.string.isRequired,
  // label: PropTypes.string.isRequired,
  // onSubmit: PropTypes.func.isRequired,
}

CreatorsStudio.defaultProps = {
  label: 'Username',
}

export default connect()(CreatorsStudio);
