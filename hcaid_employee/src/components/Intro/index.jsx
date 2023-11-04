import React from 'react'
import "./index.css";
import { Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom";


function Intro(props) {
    const navigate = useNavigate();
    return (
        <div className="intro">
            <h1>Welcom to WorkforceWatch,</h1>
            <p>With the use of this app you can predict if an employee of yours is going to quit or not!
                Start predicting now!
            </p>
            <Button size="large" className="startButton" variant="contained" onClick={() => { navigate("/HCAID-Employee/Predict") }}>
                Start Prediction!
                </Button>
        </div >
    )
}

export default Intro
