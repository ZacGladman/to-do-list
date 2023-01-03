import { IOneToDoItem } from "../utils/IOneToDoItem";

interface OneToDoItemProps {
  item: IOneToDoItem;
}

export default function OneToDoItem(props: OneToDoItemProps): JSX.Element {
  const item = props.item;

  function handleDelete() {
    console.log("item deleted");
  }
  return (
    <>
      <h2>{item.description}</h2>
      <button onClick={handleDelete}>delete</button>
      <h3>
        Status: {item.status} | Importance: {item.importance} | Due:
        {item.dueDate}
        {item.dueDate}
      </h3>
    </>
  );
}
