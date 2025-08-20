import { fetcher } from "../lib/fetcher";
import type { Todo } from "../types/Todo";

type TodoResponse = {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
};

export const fetchTodos = () => fetcher<TodoResponse>("/todos");
