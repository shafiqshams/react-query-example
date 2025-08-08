import type { Todo } from "../../types/Todo";
import { TodoCard } from "./TodoCard";

export const TodoList = ({ todos }: { todos: Todo[] | undefined }) => {
  return (
    <div className="todo-list">
      {todos?.map((todo) => {
        return <TodoCard key={todo.id} todo={todo} />;
      })}
    </div>
  );
};
