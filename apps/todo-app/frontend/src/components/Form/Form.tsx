import "./Form.css";
const Form = () => {
  const addTodo = (e: any) => {
    e.preventDefault();
  };
  return (
    <form className="form">
      <h1>Add a todo</h1>
      <input type="text" placeholder="Type a todo..." />
      <button type="submit" onClick={addTodo}>
        Add
      </button>
    </form>
  );
};
export default Form;
