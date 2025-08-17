import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTodo, fetchTodos } from "../api/todos";

export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: () => fetchTodos(),
    // staleTime: Infinity,
    // gcTime: 0, never cache the data at all, and always fetch new data
  });
};

export const useAddTodo = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
