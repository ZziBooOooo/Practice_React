import React, { useContext, useEffect } from "react";
import { useRef, useState } from "react";
import { MyContext } from "../Context";

const Write = ({ add, appToWrite }) => {
  const elInput = useRef();
  const count = useRef(0);
  const type = useRef("insert");
  const [ip, setIP] = useState();
  const { setEditText, editText } = useContext(MyContext);

  useEffect(() => {
    type.current = editText ? "modify" : "insert";
    setIP(editText && editText[0].todo);
  }, [editText]);
  // console.log(editText.todo);
  // setDefValue(editText.todo);

  /* 
  부모의 add함수에 elInput을 보내기위해 ?
  onSubmit={add}대신 {submit}함수를 만들고
  submit안에서 add함수를 실행시켜 값을 전달한다.
  */

  // console.log(...data);

  function submit(e) {
    e.preventDefault();
    let value = {
      num: count.current++,
      todo: elInput.current.value,
      checked: false,
    };
    add(value, type.current);
    elInput.current.value = "";
    elInput.current.focus();
  }

  return (
    <div className="write">
      <form onSubmit={submit}>
        <input
          ref={elInput}
          type="text"
          name="w"
          placeholder="할 일을 입력하세요"
          value={ip}
          onChange={(e) => setIP(e.target.value)}
          className="inputText"
          // defaultValue={22}
        ></input>
        <input type="submit" value="저장" className="inputSubmit"></input>
      </form>
    </div>
  );
};

export default Write;
