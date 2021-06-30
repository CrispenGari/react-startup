import Todo from "../Todo/Todo";
import "./Todos.css";

const Todos = () => {
  return (
    <div className="todos">
      <h1>Your Todos</h1>
      <div className="todos__container">
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
    </div>
  );
};

export default Todos;
