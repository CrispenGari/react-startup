import { useState, useEffect } from "react";
import axios from "../axios";

const useJsonData = (id) => {
  const [todos, setTodos] = useState([]);
  const fetData = async () => {
    const { data } = await axios.get(id ? `${id}` : "");
    setTodos(data);
  };

  useEffect(() => {
    fetData();
  }, []);

  return {
    todos,
    fetData,
  };
};

export default useJsonData;
