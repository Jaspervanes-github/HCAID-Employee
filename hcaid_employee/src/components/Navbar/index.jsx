import React from 'react'
import { Button, Toolbar } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import "./index.css";


function NavBar(props) {
    const navigate = useNavigate();
    return (
<div className="navbar">
            <Toolbar className="bar">
                <Button size="large" className="menuButton" onClick={() => { navigate("/") }}>
                    Home
                </Button>
                <Button size="large" className="menuButton" onClick={() => { navigate("/Predict") }}>
                Predict
                </Button>
                <Button size="large"  className="menuButton" onClick={() => { navigate("/HowItWorks") }}>
                How It Works
                </Button>
                <Button size="large" className="menuButton" onClick={() => {  navigate("/Feedback")}}>
                Feedback
                </Button>
            </Toolbar>
        </div >
    )
}

export default NavBar
