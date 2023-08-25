import { useParams } from "react-router-dom";
import "./DetailBlog.scss";

const DetailBlog = () => {
    let { id } = useParams();
    return (
        <>
            <div>detail id: {id}</div>
        </>
    );
};
export default DetailBlog;
