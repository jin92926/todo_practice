import React from "react";

import CommentItem from "./CommentItem";

const CommentList = ({ tests, onDelete, onUpdate }: any) => {
  return (
    <div>
      {tests.map((comment: any) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default CommentList;
