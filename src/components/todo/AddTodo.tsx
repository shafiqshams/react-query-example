import { useState } from "react";
import { useAddTodo } from "../../hooks/useTodoQuery";

export const AddTodo = () => {
  const [title, setTitle] = useState("");
  const { mutateAsync: postTodo, isPending } = useAddTodo();

  const handleAddTodo = async () => {
    try {
      await postTodo(title);
      setTitle("");
    } catch (err) {
      //TODO: update error handling
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
