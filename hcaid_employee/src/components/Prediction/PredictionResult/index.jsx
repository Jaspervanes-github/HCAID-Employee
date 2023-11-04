import React from 'react'
import "./index.css";


function PredictionResult(props) {
    const prediction = props.predictionResult.prediction;
    const featureImportanceValues = props.predictionResult.shap_values[0];
    const featureNames = props.feautureNames;

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

                {generateFeautureExplanation(featureImportanceValues, featureNames)}

                These values provide insights into which factors are considered more influential by the AI model. Remember, these results are based on historical data and patterns, and individual circumstances may vary.

                We hope this explanation clarifies how the AI model arrived at its prediction. If you have any further questions or need additional assistance, feel free to leave some feedback on the "Feedback" page!
                
    </div >
    )
}

function generateFeautureExplanation(featureImportanceValues, featureNames){
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
            <br /><br />
        </div>
        );
    });
    return featureExplanations;
}

export default PredictionResult
