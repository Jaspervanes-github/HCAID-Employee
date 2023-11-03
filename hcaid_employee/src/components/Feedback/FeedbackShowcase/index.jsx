import React from "react";
import "./index.css";
import FeedbackItem from "../FeedbackItem";


function FeedbackShowcase(props) {
    return (
        <div className="feedbackShowcase">
            <table className="table table-striped table-bordered">
                        <tr>
                            <th>Title</th>
                            <th>Content</th>
                        </tr>
                        {props.items && props.items.map(item =>
                        <FeedbackItem id={item.id} title={item.title} content={item.content} />
                        )}
                </table>
        </div >
    )
}

export default FeedbackShowcase
