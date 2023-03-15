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
  const { getTest } = useTest();
  const [tests, setTests] = useState<Test[]>([]);
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

  return (
    <>
      <CommentForm lastId={lastId} />
      <CommentList tests={tests} testData={testData} />
    </>
  );
};

export default Comment;
