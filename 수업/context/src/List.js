import React, { useContext } from "react";
import { MyContext } from "./Context";
import Item from "./Item";

const List = () => {
  // const [a, ...b] = useContext(MyContext);
  // console.log(b);
  const { data } = useContext(MyContext);
  return (
    <div>
      List 값 가져오기 :
      {data.map((obj, key) => (
        <Item key={key} obj={obj} />
      ))}
    </div>
  );
};

export default List;
