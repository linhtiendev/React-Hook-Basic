import "./App.scss";
import Nav from "./views/Nav";
import { useState } from "react"; //hook

const App = () => {
    // hàm useState trả ra array gồm 2 phần tử
    // [giá trị của biến, function xử lý khi biến có sự thay đổi ]
    let [name, setName] = useState("LiTi");
    let [address, setAddress] = useState(""); // Khởi tạo state giá trị rỗng

    const handleEventClick = (event) => {
        // set lại giá trị name
        setName(address); // dùng hook để set lại giá trị // gọi đến là tự động re-ender
    };

    // hàm nhập
    const handleOnchangeInput = (event) => {
        // set lại giá trị state
        // -> re-render
        setAddress(event.target.value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <Nav />
                <h1>Hello World {name}</h1>
                <input
                    type="text"
                    value={address}
                    onChange={(event) => handleOnchangeInput(event)}
                />
                <button
                    type="button"
                    onClick={(event) => handleEventClick(event)}
                >
                    Click me
                </button>
            </header>
        </div>
    );
};

export default App;
