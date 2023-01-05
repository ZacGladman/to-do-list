import { IOneToDoItem } from "./IOneToDoItem";

export default function dateConversion(newTodo: IOneToDoItem): unknown {
  const parsedDate = "" + newTodo.due_date;
  const updatedNewTodo = {
    description: newTodo.description,
    status: newTodo.status,
    importance: newTodo.importance,
    dueDate: parsedDate,
  };

  return updatedNewTodo;
}
