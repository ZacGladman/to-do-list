import { IOneToDoItemFromDB } from "./IOneToDoItemFromDB";

export const getTodos = async (
  setAllTodos: React.Dispatch<React.SetStateAction<IOneToDoItemFromDB[]>>
): Promise<void> => {
  try {
    const response = await fetch("https://zac-todo-list.onrender.com/items");
    const jsonBody = await response.json();
    setAllTodos(jsonBody);
  } catch (error) {
    console.error(error);
  }
};
