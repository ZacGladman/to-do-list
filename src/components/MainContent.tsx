import AllToDoItems from "./AllToDoItems";
import NewTodo from "./todoInput";
import { useState } from "react";
import { IOneToDoItem } from "../utils/IOneToDoItem";

export default function MainContent(): JSX.Element {

  

  return (
    <>
      <AllToDoItems />
      <NewTodo />
    </>
  );
}
