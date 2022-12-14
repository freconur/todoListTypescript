export interface Todo {
    id: string;
    completed: boolean;
    description: string;
    todos?: string
}
export interface TodoState {
    todos: Todo[];
  }