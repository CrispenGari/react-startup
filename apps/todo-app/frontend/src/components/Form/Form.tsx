import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useSelector } from "react-redux";

import { CREATE_TODO } from "../../graphql/mutations";
import { GET_ALL_TODOS } from "../../graphql/queries";
import { IUser } from "../../types";
import "./Form.css";

const Form = () => {
  const [todo, setTodo] = useState<string>("");
  const user: IUser = useSelector((state: any) => state.user);
  const [addTodo] = useMutation(CREATE_TODO, {
    refetchQueries: [
      { query: GET_ALL_TODOS, variables: { username: user.username } },
    ],
  });

  const createTodo = (e: any) => {
    e.preventDefault();
    if (todo.length >= 10) {
      addTodo({
        variables: {
          username: user.username,
          completed: false,
          title: todo,
        },
      });
      setTodo("");
    }
  };
  return (
    <form className="form">
      <h1>Add a todo</h1>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Type a todo..."
      />
      <small>A todo must have 10 or more characters.</small>
      <button type="submit" onClick={createTodo}>
        Add
      </button>
    </form>
  );
};
export default Form;
