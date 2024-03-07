import React from "react";

type TodoProps = {
  todoId: string;
  onDelete: (id: string) => void;
};

const DeleteTodo: React.FC<TodoProps> = ({ todoId, onDelete }) => {
  const onHandleDelete = () => {
    onDelete(todoId);
  };
  return <button onClick={onHandleDelete}>삭제</button>;
};

export default DeleteTodo;
