// useParams để lấy được tham số id
// useHistory để lưu lại dữ liệu -> khi chuyển trang r back lại sẽ kh phải load
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "./DetailBlog.scss";

const DetailBlog = () => {
    let { id } = useParams();
    let history = useHistory();

    const [dataDetailBlog, setDataDetailBlog] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        // fix lỗi nhận request
        const ourRequest = axios.CancelToken.source(); // step 1

        try {
            async function fetchData() {
                let res = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts/${id}`,
                    {
                        cancelToken: ourRequest.token, // step 2
                    }
                );
                let data = res && res.data ? res.data : [];
                console.log(data);

                setDataDetailBlog(data);
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

    const handleBackData = () => {
        // click để trở lại route blog
        history.push("/blog");
    };
    return (
        <>
            {/* <div>detail id: {id}</div> */}
            <div>
                {isLoading === false && dataDetailBlog && (
                    <div className="blog__detail--container">
                        <div className="blog__detail--id">
                            Blog ID: {dataDetailBlog.id}
                        </div>

                        <div className="blog__detail--title">
                            {dataDetailBlog.title}
                        </div>
                        <div className="blog__detail--body">
                            {dataDetailBlog.body}
                        </div>
                        <div>
                            <button
                                className="btn-back"
                                type="button"
                                onClick={() => handleBackData()}
                            >
                                Back
                            </button>
                        </div>
                    </div>
                )}
                {isLoading === true && (
                    <div colSpan="5" style={{ textAlign: "center" }}>
                        Loading data...
                    </div>
                )}
            </div>
        </>
    );
};
export default DetailBlog;
