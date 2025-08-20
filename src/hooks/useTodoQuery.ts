import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../api/todos";

export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: Infinity,
    // gcTime: 0, never cache the data at all, and always fetch new data
  });
};
