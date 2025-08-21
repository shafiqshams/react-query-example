import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTodos, postTodo, type TodoResponse } from "../api/todos";

export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: Infinity,
    // gcTime: 0, never cache the data at all, and always fetch new data
  });
};

export const useAddTodo = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: postTodo,
    onSuccess: (newTodo) => {
      qc.setQueryData(["todos"], (oldData: TodoResponse) => {
        return {
          ...oldData,
          todos: [newTodo, ...oldData.todos],
        };
      });
    },
  });
};
