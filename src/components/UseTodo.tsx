import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Todo = {
  id: string;
  title: string;
  content: string;
  isChecked: boolean;
};

const UseTodo = (initialTodo: Todo) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<Todo>(initialTodo);
};

export default UseTodo;
