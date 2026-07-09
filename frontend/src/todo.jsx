import { useEffect, useState } from "react";
import "./todo.css";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    getTodos();
  }, []);

            
  // Add 
  const addTodo = async () => {
    if (!todo) return;

    await fetch("http://localhost:5000/to", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: todo }),
    });

    setTodo("");
    getTodos();
  };

// Get all todos
  const getTodos = async () => {
    const res = await fetch("http://localhost:5000/todos");
    const data = await res.json();
    setTodos(data);
  };

  // Update todo
  const updateTodo = async () => {
    if (!todo) return;

    await fetch(`http://localhost:5000/todos/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: todo }),
    });

    setTodo("");
    setEditId(null);
    getTodos();
  };

  // Delete todo

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE",
    });

    getTodos();
  };

  // Edit todo
  const editTodo = (item) => {
    setTodo(item.title);
    setEditId(item._id);
  };

  // Cancel edit
  const cancelEdit = () => {
    setTodo("");
    setEditId(null);
  };

  return (

  <div className="todo-container">
    <h1>Todo App</h1>
<br></br>
    <input
      type="text"
      placeholder="Enter Todo"
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
    />
    

    {editId ? (
      <>
        <button onClick={updateTodo}>Update</button>
        <button onClick={cancelEdit}>Cancel</button>
      </>
    ) : (
      <button onClick={addTodo}>Add</button>
    )}

    <ul>
      {todos.map((item) => (
        <li key={item._id}>
          <span>{item.title}</span>

          <div>
            <button onClick={() => editTodo(item)}>Edit</button>
            <button onClick={() => deleteTodo(item._id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
}

export default Todo;