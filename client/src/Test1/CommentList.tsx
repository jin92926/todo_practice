import React from "react";

import CommentItem from "./CommentItem";

const CommentList = ({ tests, testData }: any) => {
  return (
    <div>
      {tests.map(({ id, text, done }: any) => (
        <CommentItem
          key={id}
          id={id}
          text={text}
          done={done}
          testData={testData}
        />
      ))}
    </div>
  );
};

export default CommentList;
