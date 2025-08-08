import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTodo, fetchTodos } from "../api/todos";

export const useReactQuery = () => {
  const queryClient = useQueryClient();

  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(),
    queryKey: ["todos"],
    staleTime: Infinity,
    // gcTime: 0, never cache the data at all, and always fetch new data
  });

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return { todos, isLoading, addTodoMutation };
};
