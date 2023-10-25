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
        </div>
      </React.Fragment>
    )
  }
}