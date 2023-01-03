import { useEffect } from "react";
import { IOneToDoItemFromDB } from "../utils/IOneToDoItemFromDB";
import axios from "axios";

interface AllToDoItemsProps {
  allTodos: IOneToDoItemFromDB[];
  setAllTodos: React.Dispatch<React.SetStateAction<IOneToDoItemFromDB[]>>;
}

export default function AllToDoItems(props: AllToDoItemsProps): JSX.Element {
  const getTodos = async () => {
    try {
      const response = await fetch("https://zac-todo-list.onrender.com/todos");
      const jsonBody = await response.json();
      console.log(jsonBody);
      props.setAllTodos(jsonBody);
      console.log(props.allTodos);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodos();
  });

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`https://zac-todo-list.onrender.com/${id}`);
      console.log("item deleted");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2>All To Do Items</h2>
      <table>
        <tr>
          <th>task</th>
          <th>importance</th>
          <th>status</th>
          <th>due</th>
        </tr>
        {props.allTodos.length > 0 &&
          props.allTodos.map((oneTodo) => {
            return (
              <>
                <tr key={oneTodo.id}>
                  <th>{oneTodo.description}</th>
                  <th>{oneTodo.importance}</th>
                  <th>{oneTodo.status}</th>
                  <th>{oneTodo.dueDate}</th>
                  <button onClick={() => handleDelete(oneTodo.id)}>
                    delete
                  </button>
                </tr>
              </>
            );
          })}
      </table>
    </>
  );
}
