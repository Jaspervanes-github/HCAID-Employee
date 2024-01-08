import React from 'react'
import "./index.css";
import { Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom";


function PredictionResult(props) {
    const prediction = props.predictionResult.prediction;
    const featureImportanceValues = props.predictionResult.shap_values[0];
    const featureNames = props.feautureNames;
    const featureValues = props.featureValues;
    const navigate = useNavigate();

    return (
        <div className="predicitonResult">
            <h1>Prediciton Results</h1>
                <p>
                Congratulations on using our AI-powered prediction tool to assess whether an employee might leave the company! We understand that it's important for you to not only know the prediction but also comprehend the factors influencing it. Let's break it down for you. The AI model has made a prediction about whether the employee is likely to leave the company. This prediction is indicated by a simple "True" (if the employee is leaving) or "False" (if the employee is not leaving).
                </p>
                <p>
                    <h4>Prediction Result: {prediction ? "True" : "False"}</h4>
                </p>
                
                <h2>Feature Explanations</h2>
                <p>
                    Feature Importance: To provide transparency, the AI model analyzes various aspects of an employee's profile to make this prediction. Each aspect is represented by a feature, such as Joining Year, Payment Tier, Age, Gender, Benching History, Experience, and Education Level. The numbers you see below represent how much each feature contributes to the prediction:
                    </p>
            
                <div className="graphContainer">
                    <h2>Shap Waterfall Plot</h2>
                    <div dangerouslySetInnerHTML={{ __html: props.graphData }} />
                </div>

                {generateFeautureExplanation(featureImportanceValues, featureNames, featureValues)}

                These values provide insights into which factors are considered more influential by the AI model. Remember, these results are based on historical data and patterns, and individual circumstances may vary.

                We hope this explanation clarifies how the AI model arrived at its prediction. If you have any further questions or need additional assistance, feel free to leave some feedback on the "Feedback" page! This will help us improve the AI model and the user experience all together.
                <p />
                <Button size="large" className="feedbackButton" variant="contained" onClick={() => { navigate("/HCAID-Employee/Feedback") }}>
                Please leave some feedback
                </Button>
                
    </div >
    )
}

function generateFeautureExplanation(featureImportanceValues, featureNames, featureValues){
    // Normalize feature importance values
    const sum = featureImportanceValues.reduce((acc, val) => acc + Math.abs(val), 0);
    const normalizedValues = featureImportanceValues.map(value => value / sum);

    // Define impact categories and corresponding descriptions
    const impactCategories = {
        "-0.75": "extremely negatively influential",
        "-0.5": "strongly negatively influential",
        "-0.25": "moderately negatively influential",
        "0": "neutral",
        "0.25": "moderately positively influential",
        "0.5": "strongly positively influential",
        "0.75": "extremely positively influential"
    };
    
    const transformedValues = convertFeatureValues(featureValues);

    const featureExplanations = normalizedValues.map((value, index) => {
        const featureName = featureNames[index];
        const impactCategory = Object.keys(impactCategories).reduce(
        (a, b) => Math.abs(a - value) < Math.abs(b - value) ? a : b
        );
        const impactDescription = impactCategories[impactCategory];
        const impactType = value < 0 ? "lower" : "higher";

        return (
            <div key={index}>
              <strong>{featureName}:</strong> {value.toFixed(3)}<br />
              A {impactType} value suggests that {featureName.toLowerCase()} is {impactDescription}, according to the model. 
              {transformedValues[index] && (
                <span> For the input value '{featureName}: {transformedValues[index]}', </span>
              )}
              {transformedValues[index] && (
                <span>the model predicts a retention score of {value.toFixed(3)}. </span>
              )}
              {transformedValues[index] && (
                <span>This indicates that {featureName.toLowerCase()} has a {impactDescription} impact on retention.</span>
              )}
              <br /><br />
            </div>
          );
        });

    return featureExplanations;
}

function convertFeatureValues(featureValues) {
    const transformedValues = featureValues.map((value, index) => {
        switch (index) {
            case 2:
                return value + " years old";
              case 3:
                return value === 0 ? 'Female' : 'Male';
              case 4:
                return value === 0 ? 'No' : 'Yes';
              case 5:
                return value + " years of experience";
              case 6:
                return value === 4 ? "Bachelor" : (value === 2 ? "Master" : "PHD");
              case 7:
                return value === 4 ? "Bachelor" : (value === 2 ? "Master" : "PHD");
              case 8:
                return value === 4 ? "Bachelor" : (value === 2 ? "Master" : "PHD");
              default:
                return value;
        }
      });
    
      return transformedValues;
}

export default PredictionResult
