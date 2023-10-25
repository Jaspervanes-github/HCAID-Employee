import React, { Component } from 'react';
import NavBar from '../components/NavBar';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="Home">
          <NavBar />
          <h1>Hello</h1>
          <p>Predict if an employee of yours is going to quit!</p>
          <a href='/Predict'>
            <button>Start</button>
          </a>
        </div>
      </React.Fragment>
    )
  }
}