import { useState } from "react";
import { useReactQuery } from "../../hooks/useReactQuery";

export const AddTodo = () => {
  const [title, setTitle] = useState("");
  const { addTodoMutation } = useReactQuery();

  const handleAddTodo = async () => {
    try {
      await addTodoMutation({ title });
      setTitle("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="input-todo">
      <input
        type="text"
        value={title}
        placeholder="Write your todo"
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={handleAddTodo} disabled={!title.length}>
        Add Todo
      </button>
    </div>
  );
};
