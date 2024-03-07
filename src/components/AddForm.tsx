import React, { useState } from "react";

function AddForm({
  addTodo,
}: {
  addTodo: (title: string, content: string) => void;
}) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const onSubmitTitleHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //제목과 내용으로 할 일 추가
    addTodo(title, content);
    setTitle("");
    setContent("");
  };
  return (
    <div>
      <form onSubmit={onSubmitTitleHandler}>
        <input
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></input>
        <button type="submit">등록하기</button>
      </form>
    </div>
  );
}

export default AddForm;
