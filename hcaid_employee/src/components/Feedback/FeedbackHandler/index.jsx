import React from "react";
import "./index.css";
import { useState } from 'react';
import FeedbackForm from "../FeedbackForm";
import FeedbackShowcase from "../FeedbackShowcase";


function FeedbackHandler(props) {
    
    const [items, setItems] = useState([
        {id: 1, title: "Great Predictions!", content: "The predictions provided by this web app were incredibly accurate. It helped me understand the likelihood of my employees leaving."},
        {id: 2, title: "Easy to Use", content: "The interface is user-friendly and intuitive. I could easily navigate through the app and get the predictions I needed."},
        {id: 3, title: "Helpful Insights", content: "The insights provided were valuable. I gained a better understanding of the factors affecting employee retention."},
        {id: 4, title: "Fantastic Tool", content: "This tool is a game-changer for HR professionals. It simplifies the process of predicting employee turnover."},
        {id: 5, title: "Responsive Support", content: "The support team was quick to respond to my queries. They were helpful and provided solutions to my concerns."},
        {id: 6, title: "Accurate Predictions", content: "I was impressed by the accuracy of the predictions. It helped me proactively address potential retention issues."},
        {id: 7, title: "Informative Feedback", content: "The feedback provided after predictions was detailed and actionable. It guided me on how to improve employee satisfaction."},
        {id: 8, title: "Efficient Solution", content: "This web app saved me a lot of time and effort in analyzing employee data. It's a time-efficient solution for HR analytics."},
        {id: 9, title: "Effective Decision-Making", content: "Using this app, I could make data-driven decisions regarding employee engagement and satisfaction. It empowered my decision-making process."},
        {id: 10, title: "Highly Recommended", content: "I highly recommend this web app to anyone looking to enhance their HR strategies. It's a powerful tool for predicting and managing employee turnover."}
      ]);

    //Bad App version:
    /*
    {id: 1, title: "Effective Predictions", content: "The predictions were accurate, but I wish there were more options for refining the analysis based on different parameters."},
    {id: 2, title: "Informative, but Needs Improvement", content: "The app provided valuable insights, but the user interface could be more intuitive. I found it a bit challenging to navigate."},
    {id: 3, title: "Mixed Feelings", content: "I appreciate the effort, but the predictions weren't always on point. It's a good starting point, but there's room for improvement."},
    {id: 4, title: "Decent Tool", content: "The predictions were somewhat helpful, but I expected more detailed explanations behind the forecasts. It felt a bit generic."},
    {id: 5, title: "Average Experience", content: "The app worked, but I encountered some glitches during my usage. It could be more polished for a smoother user experience."},
    {id: 6, title: "Room for Growth", content: "The concept is great, but the execution needs refinement. I encountered inaccuracies in the predictions, and the app could be more customizable."},
    {id: 7, title: "Needs More Features", content: "It's a good tool for basic predictions, but it lacks advanced features. Additional customization options and trend analysis would be beneficial."},
    {id: 8, title: "Satisfactory", content: "The app did what it promised, but I expected more personalized recommendations. It felt a bit one-size-fits-all."},
    {id: 9, title: "Average Performance", content: "The predictions were hit or miss. Some were accurate, while others were way off. Consistency and reliability are crucial for a tool like this."},
    {id: 10, title: "Potential, but Not There Yet", content: "I see the potential, but the app needs significant improvements in accuracy and user experience before I can fully rely on it for predictions."} 
    */
    return (
        <div className="feedbackHandler">
            <FeedbackForm handleSubmit={handleSubmit} items={items} setItems={setItems} />
            <FeedbackShowcase items={items}/>
        </div >
    )
}

function handleSubmit(items, setItems, feedbackItem){
    setItems([...items, feedbackItem])
}

export default FeedbackHandler
