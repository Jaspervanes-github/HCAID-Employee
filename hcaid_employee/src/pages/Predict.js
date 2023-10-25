import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Json from '../GoodTree.json'
import decisionTree from 'decision-tree';

export default class Predict extends Component {
  constructor(props) {
    super(props);
  }

  getDtree()
  {
    var trainedTree = new decisionTree(Json);
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