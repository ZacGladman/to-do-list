import { IOneToDoItem } from "./IOneToDoItem";

export interface IOneToDoItemFromDB extends IOneToDoItem {
  id: number;
}
