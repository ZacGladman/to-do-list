import AllToDoItems from "./AllToDoItems";
import NewTodo from "./todoInput";
import { useState } from "react";
import { IOneToDoItem } from "../utils/IOneToDoItem";
import axios from "axios";
import { IOneToDoItemFromDB } from "../utils/IOneToDoItemFromDB";

export default function MainContent(): JSX.Element {
  const [newTodo, setNewTodo] = useState<IOneToDoItem>({
    description: "",
    status: "",
    importance: "",
    dueDate: undefined,
  });
  const [allTodos, setAllTodos] = useState<IOneToDoItemFromDB[]>([]);

  const handleSubmit = async () => {
    try {
      const body = newTodo;
      const response = await axios.post("http://localhost:8000/todos", body);
      console.log(response);
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
