const Todo = (props) => {
    // propreties
    // truyền dữ liệu từ parent => child <=> top => bottom

    // khi parent thay đổi thì child thay đổi theo
    // nhận props được truyền xuống
    const todos = props.myData;
    return (
        <div className="todo-container">
            {/* kh dùng for với for-each vì nó sẽ thay đổi phần tử ở mảng cũ */}
            {/* Dùng vòng map để lập 1 mảng mới */}
            {todos.map((todo) => {
                return (
                    <li className="todo-content" key={todo.id}>
                        {todo.title}
                    </li>
                );
            })}
        </div>
    );
};
export default Todo;
