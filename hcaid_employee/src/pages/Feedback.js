import React, { Component } from 'react';
import NavBar from '../components/NavBar';

export default class Feedback extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="Feedback">
          <NavBar />
        </div>
      </React.Fragment>
    )
  }
}