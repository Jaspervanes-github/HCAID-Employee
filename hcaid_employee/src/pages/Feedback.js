import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import FeedbackHandler from '../components/Feedback/FeedbackHandler';
import Banner from '../components/Banner';

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