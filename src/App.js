import "./App.scss";
import Nav from "./views/Nav";

const App = () => {
    const handleEventClick = (event) => {
        console.log("click me", event.target.value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <Nav />
                <h1>Hello World</h1>
                <input
                    type="text"
                    value="Liti"
                    onClick={(event) => handleEventClick(event)}
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
