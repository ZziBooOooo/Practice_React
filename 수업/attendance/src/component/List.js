import React, { useContext, useRef, useState } from "react";
import { MyContext } from "./Context";
import Item from "./Item";

const List = () => {
  const { data, setData } = useContext(MyContext);

  // console.log(data);
  return (
    <>
      <p className="personNum">참여인원 : 17명</p>
      <div className="listBox">
        <ul>
          {data.map((list, key) => {
            // console.log(data);
            return <Item item={list} key={key}></Item>;
          })}
        </ul>
      </div>
    </>
  );
};

export default List;
