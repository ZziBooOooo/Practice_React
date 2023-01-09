import React from "react";
import { Link } from "react-router-dom";

const List = ({ item }) => {
  console.log(item);
  return (
    <div>
      <ul>
        <li>아이디 : {item && item.v}</li>
        {/* 글을 썼을때만 데이터가 넘어오기때문에 useState초기값이 빈값이면 에러가 난다. -> 초기값지정! */}
        {/* item && -> item에 데이터가 들어있을 경우에만 뒤쪽이 실행 */}
      </ul>
      <Link to="/write"> 글쓰기 </Link>
    </div>
  );
};

export default List;
