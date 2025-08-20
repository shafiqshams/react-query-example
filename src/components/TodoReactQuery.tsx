import { useTodos } from "../hooks/useTodoQuery";
import { TodoList } from "./todo/TodoList";
export const TodoReactQuery = () => {
  const { data, isLoading, isError } = useTodos();

  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <h3>Failed to load todos</h3>;

  return (
    <div className="container">
      <h2>Todo React Query</h2>
      {data && <TodoList todos={data.todos} />}
    </div>
  );
};
