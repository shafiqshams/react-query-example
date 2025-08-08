import { useState } from "react";
import type { Todo } from "../types/Todo";

export const TodoCard = ({ todo }: { todo: Todo }) => {
  const [checked, setChecked] = useState(todo.completed);

  return (
    <div className="todo-card">
      <p style={{ textDecoration: checked ? "line-through" : "" }}>
        {todo.title}
      </p>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </div>
  );
};
