export type Todo = {
  id: number;
  todo: string;
  completed: boolean;
};

type TodoWithUserId = Todo & {
  userId: number;
};

export type PostTodo = TodoWithUserId;
