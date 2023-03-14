import React from "react";

import CommentItem2 from "./commentItem2";

const CommentList2 = ({
  test,
  editingId,
  setTest,
  handleEdit,
  handleCancelEdit,
  setEditingId,
  handleDeleteComment,
}: any) => {
  return (
    <>
      {test.map(({ id, text, done }: any) => (
        <div key={id}>
          {editingId === id ? (
            <div>
              <input
                type="text"
                value={text}
                onChange={(e) =>
                  setTest(
                    test.map((item: any) =>
                      item.id === id ? { ...item, text: e.target.value } : item,
                    ),
                  )
                }
              />
              <button type="button" onClick={() => handleEdit(id, text)}>
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
        </div>
      ))}
    </>
  );
};

export default CommentList2;
