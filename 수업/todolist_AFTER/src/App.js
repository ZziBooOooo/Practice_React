import { useEffect, useRef, useState } from "react";
import "./App.scss";

function App() {
  //todolist 프로젝트 생성
  //sass
  const [data, setData] = useState([]),
    [todoNum, setTodoNum] = useState(0),
    elInput = useRef(),
    elItems = useRef([]),
    count = useRef(0);

  const add = (e) => {
    //input값을 받아서와 data변수에 넣어주는 일
    /* data스테이트는 배열로 선언되었으므로 배열안에 값이 업데이트 되는 것이 아니라 계속 추가가 된다. // ...data -> data의 카피본 & 배열의 뒤에 value를 추가한다. */
    /* 변수 data의 형태는 [{},{},{}] 형태이다. 그런데 value도 {} 형태이다! 
       state가 아닌 일반 변수였으면 push메서드나 배열[3]="" 형태로 값을 추가할 수 있었겠지만 state는 이런방식을 못쓰니까!
      data는 배열인데 이미 닫혀있음 -> value가 추가가 될까? 안됨
      그래서 구조분해할당 ...을 이용!
      ...data는 겉의 대괄호를 벗겨서 내용만 가져온다. 
      {},{},{} 형태 뒤에는 {}추가가 가능함
      추가한 뒤에 []로 감싼다.
    
    
    */
    e.preventDefault();
    let value = { num: ++count.current, todo: elInput.current.value };
    setData([...data, value]);
    elInput.current.value = "";
    elInput.current.focus();
  };

  /* 삭제버튼을 누른 li를 제외한 나머지 li를 data에 저장 */
  const remove = (n) => {
    let removeData = data.filter((obj) => obj.num !== n);
    setData(removeData);
  };
  const state = (e) => {
    e.target.classList.toggle("active");
    update();
  };

  const update = () => {
    let count = elItems.current.filter(
      (item) => item && item.className != "active"
    ).length;
    setTodoNum(count);
  };

  useEffect(update, [data]);

  return (
    <div className="App">
      <article>
        <h1>Todolist</h1>
        <p>할일 {todoNum}개 남음</p>
        <ul className="list">
          {data &&
            data.map((obj, key) => {
              return (
                <li
                  ref={(el) => (elItems.current[key] = el)}
                  onClick={state}
                  key={obj.num}
                >
                  {obj.todo}
                  <button onClick={() => remove(obj.num)}>삭제</button>
                </li>
              );
            })}
        </ul>
        <div className="write">
          <form onSubmit={add}>
            <input
              ref={elInput}
              type="text"
              name="w"
              placeholder="할 일을 입력하세요."
            />
            <input type="submit" value="저장" />
          </form>
        </div>
      </article>
    </div>
  );
}

export default App;
