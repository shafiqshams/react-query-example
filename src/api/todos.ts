import { request } from "../lib/request";
import type { Todo } from "../types/Todo";

export type TodoResponse = {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
};

export const fetchTodos = () => request<TodoResponse>("/todos");

//TODO: Refactor
export const postTodo = async (title: string): Promise<Todo> => {
  const todo: Todo = {
    id: Date.now(),
    todo: title,
    completed: false,
    userId: Math.floor(Math.random() * 10) + 1,
  };

  const newTodo: Todo = await request("/todos/add", {
    method: "POST",
    body: JSON.stringify({ ...todo, userId: 5 }),
  });

  return newTodo;
};
