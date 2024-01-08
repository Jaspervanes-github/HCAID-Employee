import React, { useState } from 'react'
import "./index.css";
import PredictQuestion from '../PredictQuestion';
import { toast } from 'react-toastify';
import { Button } from '@material-ui/core';
import WaterfallGraph from '../../WaterfallGraph';
import PredictionResult from '../PredictionResult';


function PredictForm(props) {
    const [joiningYear, setJoiningYear] = useState('');
    const [paymentTier, setPaymentTier] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [everBenched, setEverBenched] = useState('');
    const [experience, setExperience] = useState('');
    const [education, setEducation] = useState('');

    const [showPopup, setShowPopup] = useState(false);
    const [showGraph, setShowGraph] = useState(false);
    const [graphData, setGraphData] = useState(null);
    const [predictionResult, setPredictionResult] = useState('');

    const joiningYearOptions = [];
    const paymentTierOptions = [{ label: "0", value: 0 }, { label: "1", value: 1 }, { label: "2", value: 2 }, { label: "3", value: 3 }];
    const ageOptions = []
    const genderOptions = [{ label: "Male", value: 1 }, { label: "Female", value: 0 }];
    const everBenchedOptions = [{ label: "No", value: 0 }, { label: "Yes", value: 1 }];
    const experienceOptions = [];
    const educationOptions = [{ label: "Bachelor", value: 4 }, { label: "Master", value: 2 }, { label: "PHD", value: 1 }];
    generateOptions(joiningYearOptions, ageOptions, experienceOptions);

    return (
        <div className='predictForm'>

            <h2>Make a Prediction</h2>
            <p>We appreciate your trust in WorkforceWatch to provide valuable insights into your team's dynamics. Before we proceed, we want to assure you that:</p>

            <h3>Your Data Privacy Matters</h3>
            <p>At WorkforceWatch, we prioritize the security and privacy of your data. We do not store any information you provide for the prediction process. Your data is processed in real-time, and once the prediction is made, it is not retained in our system.</p>

            <h3>Empower Your Decision-Making</h3>
            <p>Now, let's dive into the predictions! By leveraging advanced algorithms, we aim to empower you with strategic insights that can guide your decision-making process and enhance your workforce management strategies.</p>

            <div className="predictQuestions">
                <PredictQuestion question="What year did the employee join the company?" setValue={setJoiningYear} options={joiningYearOptions} />
                <PredictQuestion question="In what payment tier is the employee(0-3)?" setValue={setPaymentTier} options={paymentTierOptions} />
                <PredictQuestion question="What age is the employee?" setValue={setAge} options={ageOptions} />
                <PredictQuestion question="What is the gender of the employee(m/f)?" setValue={setGender} options={genderOptions} />
                <PredictQuestion question="Was the employee ever benched?" setValue={setEverBenched} options={everBenchedOptions} />
                <PredictQuestion question="How many years of experience does the employee have in their current field of work?" setValue={setExperience} options={experienceOptions} />
                <PredictQuestion question="What is the education level of the employee(bachelor/phd/master)?" setValue={setEducation} options={educationOptions} />
            </div >
            
            <Button variant="contained" onClick={function (e) 
                {
                    handleSubmit({
                        JoiningYear: joiningYear,
                        PaymentTier: paymentTier,
                        Age: age,
                        Gender: gender,
                        EverBenched: everBenched,
                        Experience: experience,
                        Education: education,
                    }, setGraphData, setShowGraph, setShowPopup, setPredictionResult)
                }}>Make Prediction</Button>

            {showGraph && graphData && showPopup && predictionResult &&(
                <div className="predictResult">
                    <PredictionResult predictionResult={predictionResult} graphData={graphData} feautureNames={[
                        "JoiningYear",
                        "PaymentTier",
                        "Age",
                        "Gender",
                        "EverBenched",
                        "Experience",
                        "EducationBachelor",
                        "EducationMaster",
                        "EducationPHD"
                    ]} 
                    featureValues={[
                        joiningYear,
                        paymentTier,
                        age,
                        gender,
                        everBenched,
                        experience,
                        education, education, education
                    ]}/>
                </div >
                )}
        </div>
    )
}

function generateOptions(joiningYearOptions, ageOptions, experienceOptions) {
    for (let year = 2019; year >= 1980; year--) {
        joiningYearOptions.push({
            label: year.toString(),
            value: year
        });
    }

    for (let age = 16; age <= 67; age++) {
        ageOptions.push({
            label: age.toString() + " years old",
            value: age
        });
    }

    for (let yearsOfExperience = 0; yearsOfExperience <= 51; yearsOfExperience++) {
        experienceOptions.push({
            label: yearsOfExperience.toString() + " years of experience",
            value: yearsOfExperience
        });
    }
}

async function handleSubmit(inputs, setGraphData, setShowGraph, setShowPopup, setPredictionResult) {
    let hasEmpty = false;
    for (var key in inputs) {
        if (inputs[key] === null || inputs[key] === undefined || inputs[key] === "") {
            hasEmpty = true;
        }
    }
    console.log(inputs);
    console.log(hasEmpty);

    if (!hasEmpty) {
        let educationBinary = (inputs.Education >>> 0).toString(2).padStart(3, '0');
        const features = {
            features: [
                inputs.JoiningYear,
                inputs.PaymentTier,
                inputs.Age,
                inputs.Gender,
                inputs.EverBenched,
                inputs.Experience,
                educationBinary.substring(0, 1),
                educationBinary.substring(1, 2),
                educationBinary.substring(2, 3)
            ]
        }
        console.log(JSON.stringify(features));

        toast.warning('Making Prediction: Please wait...', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

        const response = await fetch('https://workforcewatchapi.onrender.com/predict_good', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(features),
        });

        if (response.ok) {
            const result = await response.json();
            console.log(result.shap_values[0]);
            console.log(result.prediction)

            let mySvg = WaterfallGraph([
                "JoiningYear",
                "PaymentTier",
                "Age",
                "Gender",
                "EverBenched",
                "Experience",
                "EducationBachelor",
                "EducationMaster",
                "EducationPHD"
            ],
                result.shap_values[0]);

            setPredictionResult(result);
            setGraphData(new XMLSerializer().serializeToString(mySvg));
            setShowGraph(true);
            setShowPopup(true);

            toast.success('Prediction Successful: Scroll down to see prediction!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            toast.error('Cant make prediction: Please contact the developers', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            throw new Error('Failed to fetch data');
        }

    } else {
        toast.error('Please fill in all the answers before predicting!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
}

export default PredictForm