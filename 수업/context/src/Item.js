import React, { useContext } from "react";
import { MyContext } from "./Context";

const Item = ({ obj }) => {
  const { data, setData } = useContext(MyContext);
  const modify = (n) => {
    let content = data.map((obj) => {
      if (obj.num == n) {
        return { ...obj, todo: "수정됨" };
      }
      return obj;
    });
    setData(content);
  };
  return (
    <p>
      {obj.todo}
      <button onClick={() => modify(obj.num)}>수정</button>
    </p>
  );
};

export default Item;
