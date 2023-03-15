import { useTest } from "Hooks/test";
import React, { useState } from "react";

const CommentForm = ({ lastId }: any) => {
  const { postTest } = useTest();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    const id = lastId + 1; // 마지막으로 생성된 ID 값에 1을 더하여 새로운 ID 값을 생성
    const done = false; // 예시로 done을 false로 설정
    postTest({ id, text: inputValue, done });
    setInputValue("");
  };

  const onChange = (e: any) => setInputValue(e.target.value);

  return (
    <form>
      <input
        type="text"
        placeholder="내용"
        value={inputValue}
        onChange={onChange}
      />
      <button type="submit" onClick={handleSubmit}>
        등록
      </button>
    </form>
  );
};

export default CommentForm;
