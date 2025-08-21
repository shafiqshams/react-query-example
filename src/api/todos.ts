import { fetcher } from "../lib/fetcher";
import type { Todo } from "../types/Todo";

export type TodoResponse = {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
};

export const fetchTodos = () => fetcher<TodoResponse>("/todos");

//TODO: Refactor
export const postTodo = async (title: string): Promise<Todo> => {
  const todo: Todo = {
    id: Date.now(),
    todo: title,
    completed: false,
    // userId: Math.random(1,2)
  };

  const newTodo: Todo = await fetcher("/todos/add", {
    method: "POST",
    body: JSON.stringify({ ...todo, userId: 5 }),
  });

  return newTodo;
};
