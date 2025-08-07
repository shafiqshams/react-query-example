import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "./api/todos";
import { TodoCard } from "./components/TodoCard";

export const DemoReactQuery = () => {
  const { data: todos } = useQuery({
    queryFn: () => fetchTodos(),
    queryKey: ["todos"],
  });

  return (
    <div className="container">
      <h2>DemoReactQuery</h2>
      {todos?.map((todo) => {
        return <TodoCard key={todo.id} todo={todo} />;
      })}
    </div>
  );
};
