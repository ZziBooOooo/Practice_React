import React, { useContext, useRef } from "react";
import { MyContext } from "./Context";

const Popup = () => {
  const { style, setStyle, data, setData } = useContext(MyContext);
  const elInput = useRef();
  const count = useRef(0);

  function submit(e) {
    e.preventDefault();
    let value;

    value = [
      ...data,
      {
        num: count.current++,
        todo: elInput.current.value,
      },
    ];

    setData(value);
    elInput.current.value = "";
    elInput.current.focus();
  }
  function closePopup() {
    setStyle((style) => !style);
  }

  return (
    <div className={style ? "popupBox show" : "popupBox"}>
      <p className="closeBtn" onClick={closePopup}>
        x
      </p>
      <p className="popupTitle">참여자 등록</p>
      <form onSubmit={submit}>
        <input type="text" placeholder="이름" ref={elInput}></input>
        <input type="submit" value="저장" className="saveBtn"></input>
      </form>
    </div>
  );
};

export default Popup;
