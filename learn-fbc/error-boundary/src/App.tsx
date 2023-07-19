import React from "react";
interface Props {}
const App: React.FC<Props> = ({}) => {
  const data: any = undefined;
  console.log(data.id);
  return <h1>Hello</h1>;
};

export default App;

interface Error {
  field: string;
  message: string;
}

interface Todo {
  id: number;
  completed: boolean;
  title: string;
  userId: number;
}

interface TodoResponse {
  ok: boolean;
  data?: Todo;
  error?: Error;
}
export const getTodo = async (id: number): Promise<TodoResponse> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const todo = await res.json();
  return {
    ok: true,
    data: todo,
  };
};
