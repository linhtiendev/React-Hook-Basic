// #16
import useFetch from "../customize/Fetch"; // cpn custom xử lí logic

import "./InfoUser.scss";

const InfoCovid = () => {
    // hàm nhận lại các logic đã được xử lí từ Fetch
    const {
        data: dataUser,
        isLoading,
        isError,
    } = useFetch("https://reqres.in/api/users?page=1");

    return (
        <div className="info-container">
            <h2>Table Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Nếu isLoading === false */}
                    {isError === false &&
                        isLoading === false &&
                        dataUser &&
                        dataUser.length > 0 &&
                        dataUser.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <img
                                            className="user-avatar"
                                            src={item.avatar}
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    {/* nếu isLoading === true */}
                    {isLoading === true && (
                        <tr>
                            <td colSpan="5" style={{ textAlign: "center" }}>
                                Loading data...
                            </td>
                        </tr>
                    )}
                    {isError === true && (
                        <tr>
                            <td colSpan="5" style={{ textAlign: "center" }}>
                                Something went wrong...
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};
export default InfoCovid;
