import { useState } from "react";
import ReactDOM from "react-dom/client";

const MemoDrill = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = expensiveCalculation(count);
    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Performance"]);
    };
    return (
        <div>
            <div>
                <h2>My Performances</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <button onClick={addTodo}>Add Performance</button>
            </div>
            <hr />
            <h6>We have an expensive function that runs on every render.<br/>
                When changing the count or adding a performances, you will notice a delay in execution.</h6>
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    );
};

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MemoDrill />);

export default MemoDrill