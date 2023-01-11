import React from "react";
import Item from "./Item";

const List = ({ data, todoNum }) => {
  return (
    <>
      <h1>Todolist</h1>
      <p>할일 {todoNum}개 남음</p>
      <ul className="list">
        {data &&
          data.map((obj, key) => {
            return <Item obj={obj} key={key} />;
          })}
      </ul>
    </>
  );
};
export default List;
