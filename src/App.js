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
        { id: 111, title: "Playing soccer", type: "linhtiendev" },
        { id: 222, title: "Watching youtube", type: "linhtiendev" },
        { id: 333, title: "Doing homework", type: "mini" },
        { id: 444, title: "Sleeping", type: "linhtiendev" },
    ]);

    const handleEventClick = (event) => {
        // validate input // check điều kiện input rỗng
        if (!address) {
            alert("missing requied param!");
            return;
        }
        // hook not merge state vì vậy phải dùng ... (spread syntax)
        let newTodo = { id: "123", title: address, type: "linhtiendev" }; // tạo ra 1 mảng mới
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
                <Todo myData={todos} title={"all todo"} />
                {/* tai sd Todo */}
                {/* Dùng hàm filter để lọc mảng có type là linhtiendev */}
                {/* có input đầu vào là type */}
                <Todo
                    myData={todos.filter((item) => item.type === "linhtiendev")}
                    title={`linhtiendev's todos`}
                />
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
