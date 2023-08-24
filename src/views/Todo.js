// props được truyền xuống
const Todo = ({ todos, title, deleteDataTodo }) => {
    // propreties
    // truyền dữ liệu từ parent => child <=> top => bottom

    // khi parent thay đổi thì child thay đổi theo
    // nhận props được truyền xuống

    // cách 1: const todos = props.todos;
    // cách 2: const { todos, title } = props;

    // Hàm delete
    const handleOnclickDelete = (id) => {
        // nhận props được truyền từ cha
        deleteDataTodo(id);
    };

    return (
        <div className="todo-container">
            {/* Nhận props title */}
            <div className="title">{title}</div>
            {/* kh dùng for với for-each vì nó sẽ thay đổi phần tử ở mảng cũ */}
            {/* Dùng vòng map để lập 1 mảng mới */}
            {todos.map((todo) => {
                return (
                    <div key={todo.id}>
                        <li className="todo-content">
                            {todo.title}{" "}
                            <button
                                onClick={() => handleOnclickDelete(todo.id)}
                            >
                                x
                            </button>
                        </li>
                    </div>
                );
            })}
            <hr />
        </div>
    );
};
export default Todo;
