import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../actions";
import { GET_ALL_TODOS } from "../../graphql/queries";
import { IUser } from "../../types";
import Todo from "../Todo/Todo";
import "./Todos.css";
const Todos = () => {
  const user: IUser = useSelector((state: any) => state.user);
  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();
  const { data } = useQuery(GET_ALL_TODOS, {
    variables: {
      username: user.username,
    },
  });
  useEffect(() => {
    if (data?.todos) {
      dispatch(actions.setTodos(data?.todos));
    }
  }, [data, dispatch]);
  return (
    <div className="todos">
      <h1>Your Todos</h1>
      <div className="todos__container">
        {todos?.map((todo: any) => (
          <Todo key={todo?._id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
