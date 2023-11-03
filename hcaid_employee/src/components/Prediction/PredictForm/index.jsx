import React, {useState} from 'react'
import "./index.css";
import PredictQuestion from '../PredictQuestion';
import { toast } from 'react-toastify';
import { Button } from '@material-ui/core';


function PredictForm(props) {
    const [joiningYear, setJoiningYear] = useState('');
    const [paymentTier, setPaymentTier] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [everBenched, setEverBenched] = useState('');
    const [experience, setExperience] = useState('');
    const [education, setEducation] = useState('');

    const joiningYearOptions = [];
    const paymentTierOptions = [{label: "0", value: 0}, {label: "1", value: 1}, {label: "2", value: 2}, {label: "3", value: 3}];
    const ageOptions = []
    const genderOptions = [{label: "Male", value: 1}, {label: "Female", value: 0}];
    const everBenchedOptions = [{label: "No", value: 0}, {label: "Yes", value: 1}];
    const experienceOptions = [];
    const educationOptions = [{label: "Bachelor", value: 4}, {label: "Master", value: 2}, {label: "PHD", value: 1}];
    generateOptions(joiningYearOptions, ageOptions, experienceOptions);

    return (
        <div className='predictForm'>
            <div className="predictQuestions">
                    <PredictQuestion question="What year did the employee join the company?" setValue={setJoiningYear} options={joiningYearOptions}/>
                    <PredictQuestion question="In what payment tier is the employee(0-3)?" setValue={setPaymentTier} options={paymentTierOptions}/>
                    <PredictQuestion question="What age is the employee?" setValue={setAge} options={ageOptions}/>
                    <PredictQuestion question="What is the gender of the employee(m/f)?" setValue={setGender} options={genderOptions}/>
                    <PredictQuestion question="Was the employee ever benched?" setValue={setEverBenched} options={everBenchedOptions}/>
                    <PredictQuestion question="How many years of experience does the employee have in their current field of work?" setValue={setExperience} options={experienceOptions}/>
                    <PredictQuestion question="What is the education level of the employee(bachelor/phd/master)?" setValue={setEducation} options={educationOptions}/>
                    </div >
                <Button variant="contained" onClick={function(e){ 
                    handleSubmit({
                        JoiningYear: joiningYear,
                        PaymentTier: paymentTier,
                        Age: age,
                        Gender: gender,
                        EverBenched: everBenched,
                        Experience: experience,
                        Education: education,
                    })
                }}>Make Prediction</Button>
        </div>
    )
}

function generateOptions(joiningYearOptions, ageOptions, experienceOptions){
    for (let year = 2023; year >= 1980; year--) {
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

async function handleSubmit(inputs){
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
        const features = {features: [
            inputs.JoiningYear, 
            inputs.PaymentTier, 
            inputs.Age, 
            inputs.Gender, 
            inputs.EverBenched, 
            inputs.Experience, 
            educationBinary.substring(0,1), 
            educationBinary.substring(1,2), 
            educationBinary.substring(2,3)
        ]
    }
        console.log(JSON.stringify(features));
        
        const response = await fetch('http://localhost:5000/predict', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(features),
          });

          if (response.ok) {
            const result = await response.json();
            console.log(result.shap_values);
          } else {
            throw new Error('Failed to fetch data');
          }
          
    }else {
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