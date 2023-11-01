import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import Banner from '../components/Banner';
import Decision1 from '../assets/images/Decision1.png'
import Decision2 from '../assets/images/Decision2.png'
import DecisionTree from '../assets/images/DecisionTree.svg'

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
          <h1>How it works!</h1>
          <p>On this page is a short explanation of how the app works and how the model generates a result.</p>
          <p>On the predict page, you as user can use our model to see if a employee will stay.</p>
          <p>To use the AI-model you only have to answer the questions on the predict page. With this information our model can make a prediction.</p>
          <p>The AI-model used is a simple decisiontree. Like the name says this model makes a tree of decisions.</p>
          <p>Following the tree downward gives a good indication of how the model made its prediction.</p>
          <p>The first decision made by the tree is to check the JoiningYear of an employee. The next decision is to look at the PaymentTier of the employee.</p>
          <img src={Decision1} alt="First decision of the tree" width="900" height="200"></img>
          <p>A few of the other decisions the tree make involve the age, gender, the educationlevel and the experience in the current domain.</p>
          <img src={Decision2} alt="Second decision of the tree" width="500" height="500"></img>
          <p>The full image can be found at the following link:  
            <a href={DecisionTree} target="_blank">Model</a>
          </p>
        </div>
      </React.Fragment>
    )
  }
}