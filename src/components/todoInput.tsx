import { IOneToDoItem } from "../utils/IOneToDoItem";
import  DatePicker  from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

interface newTodoProps {
    newTodo: IOneToDoItem,
    setNewTodo: React.Dispatch<React.SetStateAction<IOneToDoItem>>
}

export default function NewTodo(props: newTodoProps): JSX.Element {

   const newTodo = props.newTodo;
   const setNewTodo = props.setNewTodo

    // function parseDateIntoValidSQLString(date: Date) {
        
    // }

    function handleTimeSelection(date: Date | null) {
        const stringDate = date?.toDateString()
        setNewTodo({...newTodo, dueDate: stringDate})
        console.log(newTodo.dueDate)
        console.log(typeof newTodo.dueDate)
    }

    return (
        <>
            <div className="todoDescription">
                <h3>Task: </h3>
                <input value={newTodo.description} onChange={event => setNewTodo({...newTodo, description: event.target.value})}/>
            </div>
            <div className="todoStatus">
                <select onChange={event => setNewTodo({...newTodo, status: event.target.value})}>
                    <option value="" disabled selected />
                    <option value="done">done</option>
                    <option value="in progress">in progress</option>
                    <option value="not started">not started</option>
                </select>
            </div>
            <div className="todoImportance">
                <select onChange={event => setNewTodo({...newTodo, importance: event.target.value})}>
                    <option value="" disabled selected />
                    <option value="urgent">urgent</option>
                    <option value="high">high</option>
                    <option value="medium">medium</option>
                    <option value="low">low</option>
                </select>
            </div>
            <DatePicker
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa" 
                value={newTodo.dueDate?.toString()} 
                onChange={date => handleTimeSelection(date)}
            />
        </>
    )
}