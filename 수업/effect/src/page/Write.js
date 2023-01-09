import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Write = ({ fn }) => {
  console.log("state값이 변하면 계속 렌더링"); // input에 입력해보셈
  const nav = useNavigate();
  /*   const elId = useRef(); */
  const [data, setData] = useState({}); // setData함수에서 객체형태로 지정되었으므로 초기값도 객체로..?
  // console.log(data);

  useEffect(
    function () {
      console.log("useEffect");
      return function () {
        console.log("컴포넌트에서 나감 - 버튼누르면 App.js(list보여줌)");
      };
    },
    [data]
  );
  function pageChange() {
    fn(data); // 상위컴포넌트에 접근하는방법(함수로) -> params함수가 실행되면서 매개변수로 data & 넘겨줄때 객체로 넘겨준다.
    nav("/"); // "/"는 App.js이므로 App.js로 넘어간다. App.js에서 경로가 / 이면 <List>컴포넌트를 보여주는중
  }
  function writeFn(e) {
    e.preventDefault();
    let { name, value } = e.target;
    // let {name,value} = {name:'sdkd', value:'fdsd'} 이런형태임

    //console.log(name, value);
    // console.log(e); // 객체타입이므로 {name,value} 구조분해할당 이용
    // console.log(e.target.value);
    // console.log(elId.current.value);
    setData({ n: name, v: value }); // setData가 실행되면 컴포넌트 재실행(렌더링)
    // setData({ [ name]: value });
    // setData({ name: value });
    // setData({ name,value });
  }
  return (
    <div>
      글쓰기
      <form>
        <p>
          <input
            /*             ref={elId} */
            onChange={writeFn}
            type="text"
            name="id"
            placeholder="아이디"
          />
        </p>
        <p>
          <button onClick={pageChange}>저장</button>
        </p>
      </form>
      {/* <button onClick={pageChange}>리스트</button> */}
    </div>
  );
};

export default Write;
