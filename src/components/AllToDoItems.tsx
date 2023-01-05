import { useEffect } from "react";
import { IOneToDoItemFromDB } from "../utils/IOneToDoItemFromDB";
import axios from "axios";
import { getTodos } from "../utils/getTodos";

interface AllToDoItemsProps {
  allTodos: IOneToDoItemFromDB[];
  setAllTodos: React.Dispatch<React.SetStateAction<IOneToDoItemFromDB[]>>;
}

export default function AllToDoItems(props: AllToDoItemsProps): JSX.Element {
  const { setAllTodos } = props;

  useEffect(() => {
    getTodos(setAllTodos);
  }, [setAllTodos]);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`https://zac-todo-list.onrender.com/items/${id}`);
      getTodos(setAllTodos);
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
                  <th>{oneTodo.due_date}</th>
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
