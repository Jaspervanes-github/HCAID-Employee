import React, { useState } from "react";
import "./index.css";
import { Button, TextField } from "@material-ui/core";


function FeedbackForm(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [clickedTitle, setClickedTitle] = useState(false);
    const [clickedContent, setClickedContent] = useState(false);
    const {handleSubmit, items, setItems} = props;
    return (
        <div className="feedbackForm">
          <TextField
            className="title"
            error ={clickedTitle}
            variant="outlined"
            id="title"
            label="Title"
            value={title}
            placeholder="Type title here..."
            minRows={1}
            onChange={function(e){ 
                setTitle(e.target.value);
                if(clickedTitle && e.target.value !== ""){
                    setClickedTitle(false)
                }
            }}
            />
        <TextField
            className="content"
            variant="outlined"
            error ={clickedContent}
            id="content"
            label="Content"
            multiline
            minRows={10}
            maxRows={15}
            value={content}
            placeholder="Type some text here..."
            onChange={function(e){ 
                setContent(e.target.value);
                if(clickedContent && e.target.value !== ""){
                    setClickedContent(false)
                }
            }}
        />
        <Button className="SubmitButton" variant="contained" onClick={function(event){
            if(title == ""){
                setClickedTitle(true);
            }
            if(content == ""){
                setClickedContent(true);
            } 
            if(title !== "" && content !== "") {
                handleSubmit(items, setItems, {id: items.length + 1, title: title, content: content});
                setTitle("");
                setContent("");
                setClickedTitle(false);
                setClickedContent(false);
            }
            }}
        >
        Submit Feedback</Button>
        </div >
    )
}

export default FeedbackForm
