import React from 'react'
import "./index.css";
import { Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom";


function Intro(props) {
    const navigate = useNavigate();
    return (
        <div className="intro">
            <h1>Welcome to WorkforceWatch,</h1>
        <p>Your Strategic Employee Retention Partner!</p>
        
        <p>In the dynamic landscape of workforce management, staying ahead is key. Introducing WorkforceWatch, your AI-driven solution designed to empower employers with predictive insights into their team's future. Ever wondered if an employee is considering a career move? Now, you can proactively address potential challenges and foster a more engaged workplace.</p>

        <h2>Why WorkforceWatch?</h2>
        
          <p>🚀 <strong>Predictive Power:</strong> Leverage advanced algorithms that analyze key factors such as joining year, years of experience, and more to forecast potential employee exits.</p>
          <p>🔍 <strong>Insightful Analytics:</strong> Gain a deeper understanding of your workforce dynamics with comprehensive analytics that go beyond surface-level data.</p>
          <p>🤖 <strong>User-Friendly Interface:</strong> Seamlessly navigate through the app with our intuitive design, making predictions a breeze for both seasoned HR professionals and beginners alike.</p>
          <p>💼 <strong>Strategic Decision-Making:</strong> Make informed decisions by identifying potential retention challenges and taking proactive measures to enhance employee satisfaction.</p>
        

        <h2>Getting Started is Simple:</h2>
        
          <li><strong>Upload Data:</strong> Provide essential employee information securely and effortlessly.</li>
          <li><strong>Click the Prediction Button:</strong> Unlock powerful insights into the likelihood of employee retention.</li>
          <li><strong>Strategize:</strong> Armed with valuable predictions, strategize and implement targeted initiatives to strengthen your team.</li>
     

        <p>Join the ranks of forward-thinking employers who are revolutionizing their approach to talent retention. Don't wait until it's too late – start predicting, start optimizing, with WorkforceWatch!</p>

        <p>Ready to revolutionize your workforce strategy? Click the "Start Prediction" and take the first step toward a more resilient and engaged team!</p>
      
            <Button size="large" className="startButton" variant="contained" onClick={() => { navigate("/HCAID-Employee/Predict") }}>
                Start Prediction!
                </Button>
        </div >
    )
}

export default Intro
