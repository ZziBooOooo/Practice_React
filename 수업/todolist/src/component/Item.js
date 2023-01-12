import React, { useContext } from "react";
import { MyContext } from "../Context";

const Item = ({ obj, remove, update }) => {
  // console.log(editObj);
  /* 
    1. 수정버튼 클릭하면 입력창에 현재 값 나오게
    2. 입력창에서 수정완료하면 리스트에 업데이트하기
    */

  const { data, setData, setEditText } = useContext(MyContext);
  // console.log(...data);

  const modify = (n) => {
    // 수정버튼 누르면 입력창에 누른 값 나오게
    // 수정 후 저장누르면 값이 바뀌도록
    // console.log(data);
    let editList = data.filter((obj) => {
      if (obj.num == n) {
        console.log(`선택한 리스트의 num 값 : ${n}`);
        return obj;
      }
    });
    console.log(editList);
    setEditText(editList);
  };

  return (
    <li onClick={() => update(obj.num)} className={obj.checked ? "active" : ""}>
      {obj.todo}
      <button className="editBtn" onClick={() => modify(obj.num)}>
        수정
      </button>
      <button className="delBtn" onClick={() => remove(obj.num)}>
        삭제
      </button>
    </li>
  );
};

export default Item;
