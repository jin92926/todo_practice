import { useTest } from "Hooks/test";
import React, { useEffect, useState } from "react";

import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

interface Test {
  id: number;
  text: string;
  done: boolean;
}

const Comment = () => {
  //   const { comments, addComment, deleteComment, updateComment } = useComment();
  const { getTest, delTest, postTest, patchTest, onTogle } = useTest();
  const [tests, setTests] = useState<Test[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [editingId, setEditingId] = useState("");
  const [lastId, setLastId] = useState<number>(0); // 마지막으로 생성된 ID 값을 저장하는 상태
  const testData = async () => {
    const data = await getTest();
    const maxId = data.reduce(
      (acc: any, item: any) => Math.max(acc, item.id),
      0,
    ); // list에서 가장 큰 id값 구하기
    setLastId(maxId); // 마지막 생성된 id값으로 설정하기
    setTests(data);
  };

  useEffect(() => {
    testData();
  }, []);

  const handleSubmit = async () => {
    const id = lastId + 1;
    const done = false;
    await postTest({ id, text: inputValue, done });
    setLastId(id);

    testData();
    setInputValue("");
  };

  const handleDelete = async ({ id }: any) => {
    await delTest({ id });
    testData();
  };

  const handleUpdate = async (id: any, text: string) => {
    await patchTest({ id, text });
    setEditingId("");
    testData();
  };

  return (
    <>
      <CommentForm onSubmit={handleSubmit} />
      <CommentList
        tests={tests}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </>
  );
};

export default Comment;
