import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import Banner from '../components/Banner';
import Intro from "../components/Intro"

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
          <Intro />
        </div>
      </React.Fragment>
    )
  }
}