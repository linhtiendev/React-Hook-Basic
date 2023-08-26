import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddNewBlog from "./AddNewBlog";

import "./Blog.scss";

const Blog = () => {
    const [dataBlog, setDataBlog] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        // fix lỗi nhận request
        const ourRequest = axios.CancelToken.source(); // step 1
        try {
            async function fetchData() {
                let res = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts",
                    {
                        cancelToken: ourRequest.token, // step 2
                    }
                );
                let newData = [];
                let data = res && res.data ? res.data : [];
                // lấy 10 data
                newData = data.slice(0, 9);
                setDataBlog(newData);
                setIsLoading(false);
                setIsError(false);
            }
            fetchData();
        } catch (e) {
            setIsLoading(false);
            setIsError(true);
        }
        return () => {
            ourRequest.cancel(); // step 3
        };
    }, []);

    const handleAddNewBlog = (blog) => {
        let data = dataBlog;
        data.unshift(blog); // unshift = lấy item cuối lên đầu
        setShow(false); // tắt show modal
        setDataBlog(data); // set lại data vừa nhập ở modal
    };

    // Hàm delete a blog
    const handleDeleteAPost = (id) => {
        let data = dataBlog;
        data = data.filter((item) => item.id !== id);
        setDataBlog(data);
    };
    return (
        <>
            <Button variant="primary" className="mt-5" onClick={handleShow}>
                + Add new blog
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewBlog handleAddNewBlog={handleAddNewBlog} />
                </Modal.Body>
            </Modal>

            <div className="blog__container">
                <div className="blog--content">
                    {isError === false &&
                        isLoading === false &&
                        dataBlog &&
                        dataBlog.length > 0 &&
                        dataBlog.map((item, index) => {
                            return (
                                <div className="blog--item" key={item.id}>
                                    <div className="title">
                                        <div
                                            className="btn--delelte"
                                            onClick={() =>
                                                handleDeleteAPost(item.id)
                                            }
                                        >
                                            <span>x</span>
                                        </div>
                                        <span>{index + 1}.</span> &nbsp;
                                        {item.title}
                                    </div>
                                    <div>{item.body}</div>
                                    <button
                                        type="button"
                                        className="view-detail"
                                    >
                                        <Link to={`/blog/${item.id}`}>
                                            View detail
                                        </Link>
                                    </button>
                                </div>
                            );
                        })}
                    {isLoading === true && (
                        <div colSpan="5" style={{ textAlign: "center" }}>
                            Loading data...
                        </div>
                    )}
                    {isError === true && (
                        <div colSpan="5" style={{ textAlign: "center" }}>
                            Something went wrong...
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
export default Blog;
