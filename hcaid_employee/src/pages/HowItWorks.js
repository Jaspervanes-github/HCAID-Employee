import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import Banner from '../components/Banner';

export default class HowItWorks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="HowItWorks">
          <Banner />
          <NavBar />
          <h1></h1>
          <p></p>
        </div>
      </React.Fragment>
    )
  }
}