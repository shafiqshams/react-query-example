import { useState } from "react";
import { useAddTodo } from "../../hooks/useTodoQuery";
import type { PostTodo } from "../../types/Todo";

export const AddTodo = () => {
  const [title, setTitle] = useState("");
  const { mutateAsync: postTodo, isPending, isError } = useAddTodo();

  const handleAddTodo = async () => {
    const newTodo: PostTodo = {
      id: Date.now(),
      todo: title,
      completed: false,
      userId: Math.floor(Math.random() * 10) + 1,
    };

    await postTodo(newTodo);
      setTitle("");
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
