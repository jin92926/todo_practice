import React, { useState } from "react";

const CommentForm2 = ({ handleSubmit, setInputValue, inputValue }: any) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="내용"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default CommentForm2;
