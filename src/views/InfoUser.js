// #16
import { useEffect, useState } from "react";
import axios from "axios";

import "./InfoUser.scss";

const InfoCovid = () => {
    // tạo state có array rỗng
    const [dataUser, setDataUser] = useState([]);
    // Biến kiểm tra trạng thái loading data
    const [loading, setLoading] = useState(true);
    // dùng useEffect để lấy data <=> componentDidMount
    useEffect(async () => {
        setTimeout(async () => {
            let res = await axios.get("https://reqres.in/api/users?page=1");
            // kiểm tra giá trị data, nếu không có sẽ in ra mảng rỗng
            let data = res && res.data && res.data.data ? res.data.data : [];
            // nếu có data sẽ set lại state
            setDataUser(data);
            // hàm sẽ chạy khi loading = false
            setLoading(false);
        }, 3000);
        // truyền vào 1 mảng rỗng để hàm chỉ chạy một lần
    }, []);

    return (
        <div className="info-container">
            <h2>Table Users</h2>
            <table>
                {console.log("check data", dataUser)}
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
                    {/* Nếu loading === false */}
                    {loading === false &&
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
                    {/* nếu loading === true */}
                    {loading === true && (
                        <tr>
                            <td colSpan="5" style={{ textAlign: "center" }}>
                                Loading data...
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};
export default InfoCovid;
