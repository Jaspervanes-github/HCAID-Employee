import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import Banner from '../components/Banner';
import ModelExplainer from "../components/ModelExplainer"

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
          <ModelExplainer />
        </div>
      </React.Fragment>
    )
  }
}