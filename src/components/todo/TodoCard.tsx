import { useState } from "react";
import type { Todo } from "../../types/Todo";

interface TodoCardProps {
  todo: Todo;
}

export const TodoCard = ({
  todo: { todo: title, completed }, // <-- alias todo → title
}: TodoCardProps) => {
  const [checked, setChecked] = useState(completed);

  return (
    <div className="todo-card">
      <p style={{ textDecoration: checked ? "line-through" : "" }}>{title}</p>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </div>
  );
};
