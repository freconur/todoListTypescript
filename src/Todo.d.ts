export interface Todo {
  id: string;
  completed: boolean;
  description: string;
  todos?: string;
}
export interface TodoState {
  todos: Todo[];
}

[
  { id: 5, description: "tocar guitarra", completed: false },
  { id: 6, description: "aprender piano", completed: false },
  { id: 7, description: "leer partitura de musica", completed: false },
];
