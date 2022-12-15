import { IOneToDoItem } from "../utils/IOneToDoItem";
import { useState } from "react";
import DatePicker from "react-datepicker"

// interface newTodoProps {
//     newTodo: IOneToDoItem,
//     setNewTodo: React.Dispatch<React.SetStateAction<IOneToDoItem | undefined>>
// }

export default function NewTodo(): JSX.Element {

    const [newTodo, setNewTodo] = useState<IOneToDoItem>({description: '', status: '', importance: '', dueDate: null})

    const [description, setNewDescription] = useState('')
    const [status, setNewStatus] = useState('')


    return (
        <>
            <div className="todoDescription">
                <h3>Task: </h3>
                <input value={description} onChange={event => setNewTodo({...newTodo, description: event.target.value})}/>
            </div>
            <div className="todoStatus">
                <select onChange={event => setNewTodo({...newTodo, status: event.target.value})}>
                    <option value="done">done</option>
                    <option value="in progress">in progress</option>
                    <option value="not started">not started</option>
                </select>
            </div>
        </>
    )
}