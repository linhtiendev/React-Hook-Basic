import { useHistory } from "react-router-dom";

const NotFoundPage = () => {
    const history = useHistory();

    const handleBackToHome = () => {
        history.push("/");
    };

    return (
        <div className="not-found-container">
            <h2>Bạn hiện không xem được nội dung này</h2>
            <div>
                Lỗi này thường do chủ sở hữu chỉ chia sẻ nội dung với một nhóm
                nhỏ, thay đổi người được xem hoặc đã xóa nội dung.
            </div>
            <button class="btn btn-primary" onClick={() => handleBackToHome()}>
                Go to Home
            </button>
        </div>
    );
};
export default NotFoundPage;
