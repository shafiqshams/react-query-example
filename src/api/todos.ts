import { request } from "../lib/request";
import type { PostTodo, Todo } from "../types/Todo";

export type TodoResponse = {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
};

export const fetchTodos = () => request<TodoResponse>("/todos");

export const postTodo = (todoToPost: PostTodo): Promise<Todo> => {
  return request("/todos/add", {
    method: "POST",
    body: JSON.stringify(todoToPost),
  });
};
