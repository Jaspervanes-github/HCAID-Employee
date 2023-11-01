import React from "react";
import "./index.css";


function FeedbackItem(props) {
    return (
            <tr key={props.id}>
            <td>{props.title}</td>
            <td>{props.content}</td>
            </tr>
    )
}

export default FeedbackItem
