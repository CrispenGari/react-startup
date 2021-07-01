import { IconButton } from "@material-ui/core";
import { IoMdDoneAll } from "react-icons/io";
import { MdDelete, MdEdit, MdDone } from "react-icons/md";

import { IoCloudDone } from "react-icons/io5";
import "./Todo.css";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_TODO, DELETE_TODO } from "../../graphql/mutations";

import { GET_ALL_TODOS } from "../../graphql/queries";
import { useSelector } from "react-redux";
import { IUser } from "../../types";
const Todo = (props: any) => {
  const [edit, setEdit] = useState<boolean>(false);

  const user: IUser = useSelector((state: any) => state.user);

  const [deleteTodo] = useMutation(DELETE_TODO, {
    refetchQueries: [
      {
        query: GET_ALL_TODOS,
        variables: {
          username: user?.username,
        },
      },
    ],
  });

  const [updateTodo] = useMutation(UPDATE_TODO, {
    refetchQueries: [
      {
        query: GET_ALL_TODOS,
        variables: {
          username: user?.username,
        },
      },
    ],
  });

  const updateCompleted = () => {
    updateTodo({
      variables: {
        id: props?.todo?._id,
        title: props.todo.todo.title,
        completed: !props.todo.todo.completed,
      },
    });
  };

  const deleteThisTodo = () => {
    deleteTodo({
      variables: {
        id: props?.todo?._id,
      },
    });
  };
  if (edit) {
    return <EditForm todo={props?.todo} setEdit={setEdit} />;
  }
  return (
    <div className="todo">
      <h2 className={props.todo.todo.completed ? "todo--completed" : ""}>
        {props.todo.todo.title}
        {props.todo.todo.completed ? (
          <IoMdDoneAll className="todo__icon__completed" />
        ) : (
          <MdDone className="todo__icon__not_completed" />
        )}
      </h2>
      <div className="todo__controls">
        <IconButton
          onClick={deleteThisTodo}
          title="delete"
          className="todo__controls__button"
        >
          <MdDelete className="todo__controls__delete__icon" />
        </IconButton>
        <IconButton
          onClick={() => setEdit(true)}
          title="edit"
          className="todo__controls__button"
        >
          <MdEdit className="todo__controls__edit__icon" />
        </IconButton>
        <IconButton
          onClick={updateCompleted}
          title="complete"
          className="todo__controls__button"
        >
          <IoCloudDone className="todo__controls__completed__icon" />
        </IconButton>
      </div>
    </div>
  );
};

const EditForm = (props: any) => {
  const [todo, setTodo] = useState<string>(props?.todo?.todo.title ?? "");
  const user: IUser = useSelector((state: any) => state.user);
  const [updateTodo] = useMutation(UPDATE_TODO, {
    refetchQueries: [
      {
        query: GET_ALL_TODOS,
        variables: {
          username: user?.username,
        },
      },
    ],
  });
  const updateTheWholeTodo = (e: any) => {
    e.preventDefault();
    if (todo.length >= 10) {
      updateTodo({
        variables: {
          id: props?.todo?._id,
          title: todo,
          completed: false,
        },
      });
      props.setEdit(false);
    }
  };
  return (
    <form className="todo__edit">
      <h1>Edit Todo</h1>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Type new todo title..."
      />
      <small>A todo must have 10 or more characters.</small>
      <div>
        <button type="submit" onClick={updateTheWholeTodo}>
          Save
        </button>
        <button onClick={() => props.setEdit(false)}>Cancel</button>
      </div>
    </form>
  );
};
export default Todo;
