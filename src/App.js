import "./App.scss";
import Nav from "./views/Nav";
import { useState, useEffect } from "react"; //hook
import Todo from "./views/Todo";
import Blog from "./views/Blog";
import DetailBlog from "./views/DetailBlog";
import InfoUser from "./views/InfoUser";
import { CountDown, NewCountDown } from "./views/CountDown";

import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
} from "react-router-dom";

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

    useEffect(() => {
        // console.log("use effect");
    }, []);

    const handleEventClick = (event) => {
        // validate input // check điều kiện input rỗng
        if (!address) {
            alert("missing requied param!");
            return;
        }
        // hook not merge state vì vậy phải dùng ... (spread syntax)
        let newTodo = {
            id: Math.floor(Math.random() * 10000 + 1),
            title: address,
            type: "linhtiendev",
        }; // tạo ra 1 mảng mới
        setTodos([...todos, newTodo]); // dùng toán tử ... để lấy obj cũ, lấy thêm obj vừa nhập
        setAddress(""); // set input thành rỗng
    };

    // hàm nhập
    const handleOnchangeInput = (event) => {
        // set lại giá trị state
        // -> re-render
        setAddress(event.target.value);
    };

    // hàm xóa
    const deleteDataTodo = (id) => {
        // tạo biến mới để hứng todos
        let currentTodo = todos;
        currentTodo = currentTodo.filter((item) => item.id !== id);
        setTodos(currentTodo);
    };

    const onTimesUp = () => {
        alert("times up!");
    };

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Nav />
                    <Switch>
                        <Route exact path="/">
                            <InfoUser />
                        </Route>
                        <Route path="/countdown">
                            <CountDown onTimesUp={onTimesUp} />
                            <span>---------------------</span>
                            <NewCountDown onTimesUp={onTimesUp} />
                        </Route>
                        <Route path="/todo">
                            {/* truyền props */}
                            <Todo
                                todos={todos}
                                title={"all todo"}
                                // truyền props delete
                                deleteDataTodo={deleteDataTodo}
                            />
                            {/* tai sd Todo */}
                            {/* Dùng hàm filter để lọc mảng có type là linhtiendev */}
                            {/* có input đầu vào là type */}
                            <Todo
                                todos={todos.filter(
                                    (item) => item.type === "linhtiendev"
                                )}
                                title={`linhtiendev's todos`}
                                deleteDataTodo={deleteDataTodo}
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
                        </Route>
                        {/* thêm exact để trỏ chính xác params */}
                        <Route path="/blog" exact>
                            <Blog />
                        </Route>
                        {/* dùng dấu : để lấy được tham số */}
                        <Route path="/blog/:id">
                            <DetailBlog />
                        </Route>
                    </Switch>
                </header>
            </div>
        </Router>
    );
};

export default App;
