import "./AddNewBlog.scss";
import { useState } from "react";
import axios from "axios";

const AddNewBlog = (props) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmitButton = async () => {
        // if (title === "" || title === undefined || title === null) alert("empty title");
        // <=>
        if (!title) {
            alert("empty title");
            return;
        }
        if (!content) {
            alert("empty content");
            return;
        }

        let data = {
            title: title,
            body: content,
            userId: 1,
        };

        let res = await axios.post(
            "https://jsonplaceholder.typicode.com/posts",
            data
        );
        // check
        if (res && res.data) {
            let newBlog = res.data;
            props.handleAddNewBlog(newBlog); // truyền props
        }
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
