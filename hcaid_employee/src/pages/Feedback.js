import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import Banner from '../components/Banner';
import FeedbackHandler from '../components/Feedback/FeedbackHandler';

export default class Feedback extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="Feedback">
          <Banner />
          <NavBar />
          <FeedbackHandler />
        </div>
      </React.Fragment>
    )
  }
}