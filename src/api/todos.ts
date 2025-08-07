/* Mock functions for fetching todos */

import { todos } from "../mock_data/todos";
import type { Todo } from "../types/Todo";

export const fetchTodos = async (searchQuery: string = "") => {
  //Simulate actual fetching from the API
  await new Promise((resolve) => setTimeout(resolve, 100));

  console.log("Fetching Todos");
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return [...filteredTodos];
};

export const addTodo = async (todo: Pick<Todo, "title">): Promise<Todo> => {
  //Simulate actual fetching from the API
  await new Promise((resolve) => setTimeout(resolve, 100));

  const newTodo: Todo = {
    id: todos.length + 1,
    title: todo.title,
    completed: false,
  };

  // This is just to store in memory for the current execution
  todos.push(newTodo);

  return newTodo;
};
