import "./AddNewBlog.scss";
import { useState } from "react";

const AddNewBlog = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmitButton = () => {
        console.log("click me: ", title, content);
    };
    return (
        <div className="add-new-container">
            <div className="text-add-new">--Add new blog--</div>
            <div className="inputs-data">
                <label>Title: </label>
                <input
                    type="text"
                    value={title}
                    // nhận data từ input -> set state title
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div className="inputs-data">
                <label>Content: </label>
                <input
                    type="text"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                />
            </div>
            <button className="btn-submit" onClick={handleSubmitButton}>
                Submit
            </button>
        </div>
    );
};
export default AddNewBlog;
