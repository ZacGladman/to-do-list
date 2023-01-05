import AllToDoItems from "./AllToDoItems";
import NewTodo from "./todoInput";
import { useState } from "react";
import { IOneToDoItem } from "../utils/IOneToDoItem";
import axios from "axios";
import { IOneToDoItemFromDB } from "../utils/IOneToDoItemFromDB";
import { getTodos } from "../utils/getTodos";

export default function MainContent(): JSX.Element {
  const [newTodo, setNewTodo] = useState<IOneToDoItem>({
    description: "",
    due_date: undefined,
    importance: "",
    status: "",
  });
  const [allTodos, setAllTodos] = useState<IOneToDoItemFromDB[]>([]);

  const handleSubmit = async () => {
    try {
      const body = newTodo;
      await axios.post("https://zac-todo-list.onrender.com/items", body);
      getTodos(setAllTodos);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NewTodo newTodo={newTodo} setNewTodo={setNewTodo} />
      <button onClick={handleSubmit}>submit</button>
      <AllToDoItems allTodos={allTodos} setAllTodos={setAllTodos} />
    </>
  );
}
