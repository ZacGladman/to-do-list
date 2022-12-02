import { IOneToDoItem } from "../utils/IOneToDoItem";

interface OneToDoItemProps {
  item: IOneToDoItem;
}

export default function OneToDoItem(props: OneToDoItemProps): JSX.Element {
  const item = props.item;
  return (
    <>
      <h2>{item.title}</h2>
      <h3>
        Status: {item.status} | Importance: {item.importance} | Due:{" "}
        {item.dueDate}
      </h3>
      <p>{item.description}</p>
    </>
  );
}
