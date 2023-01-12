import React, { useContext } from "react";
import { useRef } from "react";
import Item from "./Item";

const List = ({ data, todoNum, remove, update }) => {
  return (
    <>
      <h1>TodoList</h1>
      <p>{todoNum}개 남음</p>
      <ul className="list">
        {data &&
          data.map((obj, key) => {
            return (
              <Item obj={obj} key={key} remove={remove} update={update}></Item>
            );
          })}
      </ul>
    </>
  );
};

export default List;
