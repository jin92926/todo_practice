import { useTest } from "Hooks/test";
import React, { useCallback, useEffect, useState } from "react";

const Sample = () => {
  const [test, setTest] = useState<any[]>([]);
  const { getTest, delTest, postTest, patchTest, onTogle } = useTest();
  const [inputValue, setInputValue] = useState("");
  const [editingId, setEditingId] = useState("");
  const [lastId, setLastId] = useState<number>(0); // 마지막으로 생성된 ID 값을 저장하는 상태
  const [editingText, setEditingText] = useState("");

  const testData = async () => {
    const data = await getTest();
    const maxId = data.reduce(
      (acc: any, item: any) => Math.max(acc, item.id),
      0,
    ); // list에서 가장 큰 id값 구하기
    setLastId(maxId); // 마지막 생성된 id값으로 설정하기
    setTest(data);
  };

  useEffect(() => {
    testData();
  }, []);

  const handleDeleteComment = async ({ id }: any) => {
    await delTest({ id });
    testData();
    // console.log("코멘트 삭제 성공:", result);
  };
  const handleSubmit = async () => {
    const id = lastId + 1; // 마지막으로 생성된 ID 값에 1을 더하여 새로운 ID 값을 생성
    const done = false; // 예시로 done을 false로 설정
    await postTest({ id, text: inputValue, done });
    testData();
    setInputValue("");
  };

  const handleEdit = async ({ id, text }: any) => {
    await patchTest({ id, text });
    setEditingId("");
    testData();
  };

  const handleCancelEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEditingId("");
    setTest(
      test.map((item) =>
        item.id === editingId ? { ...item, text: editingText } : item,
      ),
    );
    testData();
  };

  // const handleChangeDone = async ({ id, done }: any) => {
  //   await onTogle({ id, done: !done });
  //   testData();
  // };

  return (
    <>
      <form>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
          Add
        </button>
      </form>
      {test.map(({ id, text, done }) => (
        <div key={id}>
          {editingId === id ? (
            <div>
              <input
                type="text"
                value={text}
                onChange={(e) =>
                  setTest(
                    test.map((item) =>
                      item.id === id ? { ...item, text: e.target.value } : item,
                    ),
                  )
                }
              />
              <button type="button" onClick={() => handleEdit({ id, text })}>
                Save
              </button>
              <button type="button" onClick={handleCancelEdit}>
                Cancel
              </button>
            </div>
          ) : (
            <div onClick={() => setEditingId(id)}>
              <div>{text}</div>
              <div>{id}</div>
              <div>{JSON.stringify(done)}</div>
            </div>
          )}
          <button type="button" onClick={() => handleDeleteComment({ id })}>
            Delete
          </button>
          {/* <button type="button" onClick={() => handleChangeDone({ id, done })}>
            change
          </button> */}
        </div>
      ))}
    </>
  );
};

export default Sample;
