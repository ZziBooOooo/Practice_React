import React, { useContext } from "react";
import { MyContext } from "./Context";

const Item = (list, key) => {
  const { data, setData, setStyle } = useContext(MyContext);
  //   console.log(data);
  /*   console.log(list);
  console.log(list.item.todo); */

  function editList(n) {
    console.log("edit...");
    // 팝업창이 떠야함-> popubBox에 show클래스 추가
    setStyle((style) => !style);
  }

  function deleteList(n) {
    let removeData = data.filter((obj) => obj.num !== n);
    console.log(n);
    console.log(removeData);
    setData(removeData);
  }

  return (
    <li key={key}>
      <p>
        {list.item.num + 1}. {list.item.todo}
      </p>
      <div className="btnBox">
        <button
          className="editBtn"
          onClick={() => {
            editList(list.item.num);
          }}
        >
          수정
        </button>
        <button
          className="deleteBtn"
          onClick={() => {
            deleteList(list.item.num);
          }}
        >
          삭제
        </button>
      </div>
    </li>
  );
};

export default Item;
