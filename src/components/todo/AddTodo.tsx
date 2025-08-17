import { useState } from "react";
import { useAddTodo } from "../../hooks/useTodoQuery";

export const AddTodo = () => {
  const [title, setTitle] = useState("");
  const { mutateAsync: addTodo, isPending } = useAddTodo();

  const handleAddTodo = async () => {
    try {
      await addTodo({ title });
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

      <button onClick={handleAddTodo} disabled={!title.length || isPending}>
        {isPending ? "Adding ..." : "Add Todo"}
      </button>
    </div>
  );
};
