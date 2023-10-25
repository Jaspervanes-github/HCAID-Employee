import React, { Component } from 'react';
import NavBar from '../components/NavBar';

export default class Predict extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="Predict">
          <NavBar />
        </div>
      </React.Fragment>
    )
  }
}