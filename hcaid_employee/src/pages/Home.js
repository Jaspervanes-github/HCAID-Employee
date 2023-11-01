import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import Banner from '../components/Banner';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="Home">
          <Banner />
          <NavBar />
          <h1>Welcom to WorkforceWatch,</h1>
          <p>With the use of this app you can predict if an employee of yours is going to quit or not!
            Start predicting now!
            </p>
          <a href='/Predict'>
            <button>Start</button>
          </a>
        </div>
      </React.Fragment>
    )
  }
}