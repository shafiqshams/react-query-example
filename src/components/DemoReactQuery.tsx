import { AddTodo } from "./todo/AddTodo";
import { TodoList } from "./TodoList";
import { useReactQuery } from "../hooks/useReactQuery";

export const DemoReactQuery = () => {
  const { todos, isLoading } = useReactQuery();
  if (isLoading) return <h3>Loading...</h3>;

  return (
    <div className="container">
      <h2>Demo React Query</h2>
      <AddTodo />
      <TodoList todos={todos} />
    </div>
  );
};
