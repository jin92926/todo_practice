import React, { useState } from "react";

const CommentItem2 = ({ comment, onDelete, onUpdate }: any) => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(comment.id);
  const [content, setContent] = useState(comment.text);

  const handleDelete = () => {
    onDelete(comment.id);
  };

  const handleUpdate = () => {
    onUpdate(comment.id, comment.text);
    setEditing(false);
  };
  // console.log(comment);
  return (
    <div>
      {editing ? (
        <>
          <textarea
            placeholder="내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="button" onClick={() => handleUpdate()}>
            수정
          </button>
          <button type="button" onClick={() => setEditing(false)}>
            취소
          </button>
        </>
      ) : (
        <div onClick={() => setEditing(true)}>
          <div>{comment.text}</div>
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentItem2;
