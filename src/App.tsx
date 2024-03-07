import { useState } from "react";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import DeleteTodo from "./components/DeleteTodo";
import { v4 } from "uuid";
import "./App.css";

type Todo = {
  id: string;
  title: string;
  content: string;
  deadLine: string;
  isDone: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string, content: string, deadLine: string) => {
    const newTodo: Todo = {
      id: v4(),
      title,
      content,
      deadLine,
      isDone: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const deleteTodo = (id: string) => {
    const deletedTodo = todos.filter((todo) => todo.id !== id);

    setTodos(deletedTodo);
  };

  const onCancelButtonHandler = (id: string) => {
    const canceled = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos([...canceled]);
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
          {todos.map((todo) =>
            !todo.isDone ? (
              <li key={todo.id}>
                <div>
                  <p>{todo.title}</p>
                  <p>{todo.content}</p>
                  <p>
                    {new Date(todo.deadLine).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <button onClick={() => onCancelButtonHandler(todo.id)}>
                    완료
                  </button>
                  <DeleteTodo todoId={todo.id} onDelete={deleteTodo} />
                </div>
              </li>
            ) : null
          )}
        </ul>
      </div>
      <div>
        <h1>Done</h1>
        <ul>
          {todos.map((todo) =>
            todo.isDone ? (
              <li key={todo.id}>
                <div>
                  <p>{todo.title}</p>
                  <p>{todo.content}</p>
                  <p>
                    {new Date(todo.deadLine).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <button onClick={() => onCancelButtonHandler(todo.id)}>
                    취소
                  </button>
                  <DeleteTodo todoId={todo.id} onDelete={deleteTodo} />
                </div>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
