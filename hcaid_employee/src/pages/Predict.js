import React, { Component } from 'react';
import NavBar from '../components/Navbar'
import Banner from '../components/Banner';
//import tf from '@tensorflow/tfjs';
//import tfn from '@tensorflow/tfjs-node'

export default class Predict extends Component {
  constructor(props) {
    super(props);
  }

  /*async getDtree()
  {
    const handler = tfn.io.fileSystem("hcaid_employee\src\assets\models\GoodTree.json");
    const model = await tf.loadLayersModel(handler);
  }*/

  render() {
    return (
      <React.Fragment>
        <div className="Predict">
          <Banner />
          <NavBar />
        </div>
      </React.Fragment>
    )
  }
}