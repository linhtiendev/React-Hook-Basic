import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Blog.scss";

const Blog = () => {
    const [dataBlog, setDataBlog] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

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
                console.log(newData);

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

    return (
        <>
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
                                        <span>{index + 1}.</span> &nbsp;
                                        {item.title}
                                    </div>
                                    <div>{item.body}</div>
                                    <button
                                        type="button"
                                        className="btn-view-detail"
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
