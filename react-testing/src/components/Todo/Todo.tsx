import React from "react";

interface Props {}
const Todo: React.FC<Props> = () => {
  const [todo, setTodo] = React.useState([]);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodo(data.map((todo: any) => todo.title)))
      .catch((err) => setError("Failed to fetch todos."));
  }, []);
  return (
    <div className="todo">
      {error && <p>{error}</p>}
      <ul>
        {todo.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
