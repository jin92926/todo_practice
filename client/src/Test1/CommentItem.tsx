import { useTest } from "Hooks/test";
import React, { useState } from "react";

const CommentItem = ({ id, text, done, testData }: any) => {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(text);
  const { delTest, patchTest } = useTest();

  const handleDelete = async ({ id }: any) => {
    await delTest({ id });
    testData();
  };

  const handleUpdate = async ({ id, content }: any) => {
    await patchTest({ id, text: content });
    setEditing(false);
    testData();
  };

  return (
    <div>
      {editing ? (
        <>
          <textarea
            placeholder="내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="button" onClick={() => handleUpdate({ id, content })}>
            수정
          </button>
          <button type="button" onClick={() => setEditing(false)}>
            취소
          </button>
        </>
      ) : (
        <div onClick={() => setEditing(true)}>
          <div>{text}</div>
          <button type="button" onClick={() => handleDelete({ id })}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentItem;
