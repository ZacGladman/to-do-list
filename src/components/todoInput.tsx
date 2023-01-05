import { IOneToDoItem } from "../utils/IOneToDoItem";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface newTodoProps {
  newTodo: IOneToDoItem;
  setNewTodo: React.Dispatch<React.SetStateAction<IOneToDoItem>>;
}

export default function NewTodo(props: newTodoProps): JSX.Element {
  const newTodo = props.newTodo;
  const setNewTodo = props.setNewTodo;

  // function parseDateIntoValidSQLString(date: Date) {

  // }

  function handleTimeSelection(date: Date | null) {
    const stringDate = date?.toString();
    setNewTodo({ ...newTodo, due_date: stringDate });
    console.log(newTodo.due_date);
    console.log(typeof newTodo.due_date);
    console.log(newTodo);
  }

  return (
    <div className="todoInput">
      <input
        value={newTodo.description}
        placeholder="enter a task here"
        onChange={(event) =>
          setNewTodo({ ...newTodo, description: event.target.value })
        }
        className="todoDescription"
      />
      <div className="todoStatus">
        <select
          onChange={(event) =>
            setNewTodo({ ...newTodo, status: event.target.value })
          }
        >
          <option value="" disabled selected />
          <option value="done">done</option>
          <option value="in progress">in progress</option>
          <option value="not started">not started</option>
        </select>
      </div>
      <div className="todoImportance">
        <select
          onChange={(event) =>
            setNewTodo({ ...newTodo, importance: event.target.value })
          }
        >
          <option value="" disabled selected />
          <option value="urgent">urgent</option>
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>
      </div>
      <DatePicker
        placeholderText="select a due date here"
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
        value={newTodo.due_date?.toString()}
        onChange={(date) => handleTimeSelection(date)}
      />
    </div>
  );
}
