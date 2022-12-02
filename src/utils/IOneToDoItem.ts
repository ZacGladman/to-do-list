export interface IOneToDoItem {
  title: string;
  description: string;
  status: ToDoItemStatus;
  importance: ToDoItemImportance;
  dueDate: ToDoItemDueDate;
}

interface ToDoItemStatus {
  completed: boolean;
  inProgress: boolean;
  yetToStart: boolean;
}

interface ToDoItemImportance {
  urgent: boolean;
  high: boolean;
  medium: boolean;
  low: boolean;
}

interface ToDoItemDueDate {
  day:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31;
  month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  year: number;
}
