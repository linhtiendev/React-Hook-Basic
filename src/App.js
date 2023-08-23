import "./App.scss";
import Nav from "./views/Nav";
import { useState } from "react"; //hook
import Todo from "./views/Todo";

const App = () => {
    // hàm useState trả ra array gồm 2 phần tử
    // [giá trị của biến, function xử lý khi biến có sự thay đổi ]
    let [name, setName] = useState("LiTi");
    let [address, setAddress] = useState(""); // Khởi tạo state giá trị rỗng
    let [todos, setTodos] = useState([
        { id: 111, title: "Playing soccer" },
        { id: 222, title: "Watching youtube" },
    ]);

    const handleEventClick = (event) => {
        // validate input // check điều kiện input rỗng
        if (!address) {
            alert("missing requied param!");
            return;
        }
        // hook not merge state vì vậy phải dùng ... (spread syntax)
        let newTodo = { id: "123", title: address }; // tạo ra 1 mảng mới
        setTodos([...todos, newTodo]); // dùng toán tử ... để lấy obj cũ, lấy thêm obj vừa nhập
        setAddress(""); // set input thành rỗng
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
                {/* truyền props */}
                <Todo myData={todos} />
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
