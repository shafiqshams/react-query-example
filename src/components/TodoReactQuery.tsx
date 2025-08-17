import { useTodos } from "../hooks/useTodoQuery";
import { AddTodo } from "./todo/AddTodo";
import { TodoList } from "./todo/TodoList";
export const TodoReactQuery = () => {
  const { data: todos, isLoading, isError } = useTodos();

  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <h3>Failed to load todos</h3>;

  return (
    <div className="container">
      <h2>Todo React Query</h2>
      <AddTodo />
      <TodoList todos={todos} />
    </div>
  );
};
