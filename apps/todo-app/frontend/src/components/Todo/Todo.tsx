import { IconButton } from "@material-ui/core";
import { IoMdDoneAll } from "react-icons/io";
import { MdDelete, MdEdit, MdDone } from "react-icons/md";

import { IoCloudDone } from "react-icons/io5";
import "./Todo.css";
import { useState } from "react";

const Todo = () => {
  const [edit, setEdit] = useState<boolean>(false);

  if (edit) {
    return <EditForm setEdit={setEdit} />;
  }
  return (
    <div className="todo">
      <h1>
        Cleaning the house
        <IoMdDoneAll className="todo__icon__completed" />
        <MdDone className="todo__icon__not_completed" />
      </h1>
      <div className="todo__controls">
        <IconButton title="delete" className="todo__controls__button">
          <MdDelete className="todo__controls__delete__icon" />
        </IconButton>
        <IconButton
          onClick={() => setEdit(true)}
          title="edit"
          className="todo__controls__button"
        >
          <MdEdit className="todo__controls__edit__icon" />
        </IconButton>
        <IconButton title="complete" className="todo__controls__button">
          <IoCloudDone className="todo__controls__completed__icon" />
        </IconButton>
      </div>
    </div>
  );
};

const EditForm = (props: any) => {
  return (
    <form className="todo__edit">
      <h1>Edit Todo</h1>
      <input type="text" placeholder="Type new todo title..." />
      <div>
        <button type="submit">Save</button>
        <button onClick={() => props.setEdit(false)}>Cancel</button>
      </div>
    </form>
  );
};
export default Todo;
