export interface IOneToDoItemFromDB {
  id: number;
  description: string;
  status: string;
  importance: string;
  dueDate: string | undefined;
}
