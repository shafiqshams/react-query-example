import { useMutation, useQuery } from "@tanstack/react-query";
import { addTodo, fetchTodos } from "./api/todos";
import { TodoCard } from "./components/TodoCard";
import { useState } from "react";

export const DemoReactQuery = () => {
  const [title, setTitle] = useState("");
  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(),
    queryKey: ["todos"],
  });

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
  });

  const handleAddTodo = async () => {
    try {
      await addTodoMutation({ title });
      setTitle("");
    } catch (err) {
      console.error(err);
    }
  };

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <div className="container">
      <h2>DemoReactQuery</h2>
      <input
        type="text"
        value={title}
        placeholder="Write your todo"
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={handleAddTodo}>Add Todo</button>

      {todos?.map((todo) => {
        return <TodoCard key={todo.id} todo={todo} />;
      })}
    </div>
  );
};
