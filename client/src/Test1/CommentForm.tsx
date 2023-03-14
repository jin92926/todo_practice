import React, { useState } from "react";

const CommentForm = ({ onSubmit }: any) => {
  const [text, setContent] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    onSubmit({ text }); // id와 done 값을 전달
    // onSubmit({ text });
    setContent("");
  };
  // console.log(text);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="내용"
        value={text}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default CommentForm;
