import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import Banner from '../components/Banner';
import GoodTree from '../assets/models/GoodTree.json';

export default class Predict extends Component {
  constructor(props) {
    super(props);
    this.model = GoodTree;
  }

  makePrediction = () => {
    const inputs = {
      JoiningYear: this.JoiningYear.value,
      PaymentTier: this.PaymentTier.value,
      Age: this.Age.value,
      Gender: this.Gender.value,
      EverBenched: this.EverBenched.value,
      Experience: this.Experience.value,
      Education: this.Education.value,
    };
    // Do something with the 'inputs' object, e.g., make predictions or further processing
    console.log(inputs); // You can console.log or use 'inputs' as needed
  };

  render() {
    return (
      <React.Fragment>
        <div className="Predict">
          <Banner />
          <NavBar />
          <form className="form-horizontal">
            <div className="input-group">
              <label htmlFor="JoiningYear">What year did the employee join the company?</label>
              <input type="text" className="form-control" ref={(c) => (this.JoiningYear = c)} name="JoiningYear" />
            </div>
            <div className="input-group">
              <label htmlFor="PaymentTier">In what payment tier is the employee(0-3)?</label>
              <input type="text" className="form-control" ref={(c) => (this.PaymentTier = c)} name="PaymentTier" />
            </div>
            <div className="input-group">
              <label htmlFor="Age">What age is the employee?</label>
              <input type="text" className="form-control" ref={(c) => (this.Age = c)} name="Age" />
            </div>
            <div className="input-group">
              <label htmlFor="Gender">What is the gender of the employee(m/f)?</label>
              <input type="text" className="form-control" ref={(c) => (this.Gender = c)} name="Gender" />
            </div>
            <div className="input-group">
              <label htmlFor="EverBenched">Was the employee ever benched?</label>
              <input type="text" className="form-control" ref={(c) => (this.EverBenched = c)} name="EverBenched" />
            </div>
            <div className="input-group">
              <label htmlFor="Experience">How much experience does the employee have in their current field of work?</label>
              <input type="text" className="form-control" ref={(c) => (this.Experience = c)} name="Experience" />
            </div>
            <div className="input-group">
              <label htmlFor="Education">What is the education level of the employee(bachelor/phd/master)?</label>
              <input type="text" className="form-control" ref={(c) => (this.Education = c)} name="Education" />
            </div>
          </form>
          <button onClick={this.makePrediction}>Predict</button>
        </div>
      </React.Fragment>
    );
  }
}