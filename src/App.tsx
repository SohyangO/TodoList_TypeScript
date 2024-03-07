import { useState } from "react";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import { v4 } from "uuid";
import "./App.css";

type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string, content: string) => {
    const newTodo: Todo = {
      id: v4(),
      title,
      content,
      isDone: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };
  return (
    <>
      <div>
        <Header />
        <AddForm addTodo={addTodo} />
      </div>
      <div>
        <h1>Is progress</h1>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <div>
                <p>{todo.title}</p>
                <p>{todo.content}</p>
                <button>{todo.isDone ? "완료" : "취소"}</button>
                <button>삭제</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Done</h1>
      </div>
    </>
  );
}

export default App;
