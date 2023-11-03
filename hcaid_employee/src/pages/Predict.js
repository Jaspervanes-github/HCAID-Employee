import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import Banner from '../components/Banner';
import GoodTree from '../assets/models/GoodTree.json';
import PredictForm from '../components/Prediction/PredictForm';


export default class Predict extends Component {
  constructor(props) {
    super(props);
    this.model = GoodTree;
  }

  render() {
    return (
      <React.Fragment>
        <div className="Predict">
          <Banner />
          <NavBar />
          <PredictForm />
        </div>
      </React.Fragment>
    );
  }
}