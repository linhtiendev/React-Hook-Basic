// useParams để lấy được tham số id
// useHistory để lưu lại dữ liệu -> khi chuyển trang r back lại sẽ kh phải load
import { useParams, useHistory } from "react-router-dom";
import "./DetailBlog.scss";

const DetailBlog = () => {
    let { id } = useParams();
    let history = useHistory();

    const handleBackData = () => {
        // click để trở lại route blog
        history.push("/blog");
    };
    return (
        <>
            <div>
                <button type="button" onClick={() => handleBackData()}>
                    Back
                </button>
            </div>
            <div>detail id: {id}</div>
        </>
    );
};
export default DetailBlog;
