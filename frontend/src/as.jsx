import { useEffect, useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  // Get all todos
  const getTodos = async () => {
    const res = await fetch("http://localhost:4000/todos");
    const data = await res.json();
    setTodos(data);                                           
  };

  // Add todo
  const addTodo = async () => {
    if (!todo) return;

    await fetch("http://localhost:4000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: todo }),
    });

    setTodo("");
    getTodos();
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await fetch(`http://localhost:4000/todos/${id}`, {
      method: "DELETE",
    });

    getTodos();
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Todo"
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((item) => (
          <li key={item._id}>
            {item.title}

            <button onClick={() => deleteTodo(item._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;