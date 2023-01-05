export interface IOneToDoItemFromDB {
  id: number;
  description: string;
  status: string;
  importance: string;
  due_date: string | undefined;
}
