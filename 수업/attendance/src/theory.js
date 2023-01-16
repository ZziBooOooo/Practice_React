import React, { useState } from "react";

const theory = () => {
  const [state, setState] = useState(data);
  const data = [
    { id: 1, name: "sewon" },
    { id: 2, name: "sewon" },
    { id: 3, name: "sewon" },
  ];

  // *** 추가
  // 일반 js였으면 state.push()로 데이터를 추가했을 텐데 이러면 렌더링이 안일어난다.
  // 리액트에서는 setState를 이용해서 추가
  function insert() {
    const insert = [...data, { id: 4, name: "sewon" }];
    setState(insert);
  }

  // *** 수정
  // n이 2라면 나머지는 그냥 리턴, 2번은 수정된 값으로 리턴되어야함
  function modify(n) {
    setState(
      data.map((obj) => {
        if (obj.id === n) {
          obj.name = "홍길동";
        }
        return obj;
      })
    );
  }

  /* 짧은버전 */
  // 화살표다음 중괄호 생략은 리턴
  function modify(n) {
    setState(
      data.map((obj) => (obj.id === n ? { ...obj, name: "홍길동" } : obj))
    );
  }

  /* 
  (obj.num === n ? { obj.name: "홍길동" } : obj)
   [
    { id: 1, name: "sewon" },
    { name: "홍길동" },
    { id: 3, name: "sewon" },
    { id: 4, name: "sewon" },
   ]
  */

  // ** 삭제
  function remove(n) {
    setState(data.filter((obj) => obj.num !== num));
  }

  return;
  <div></div>;
};

export default theory;
