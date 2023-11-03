import React from "react";
import "./index.css";
import { useState } from 'react';
import FeedbackForm from "../FeedbackForm";
import FeedbackShowcase from "../FeedbackShowcase";


function FeedbackHandler(props) {
    
    const [items, setItems] = useState([
        {id: 1, title: "Test title 1", content: "Test Content 1"},
        {id: 2, title: "Test title 2", content: "Test Content 2"}
      ]);

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
