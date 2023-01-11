import React from "react";
import { useEffect, useRef, useState } from "react";

const Insert = ({ add }) => {
  const count = useRef(0),
    elInput = useRef();

  const submit = (e) => {
    e.preventDefault();
    console.log(elInput.current.value);
    let value = { num: ++count.current, todo: elInput.current.value };
    add(value);
    elInput.current.value = "";
    elInput.current.focus();
  };
  return (
    <div className="write">
      <form onSubmit={submit}>
        <input
          ref={elInput}
          type="text"
          name="w"
          placeholder="할 일을 입력하세요."
        />
        <input type="submit" value="저장" />
      </form>
    </div>
  );
};

export default Insert;
