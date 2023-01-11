import "./App.scss";
import { useState, useRef, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [todoNum, setTodoNum] = useState(data.length);
  const [inputValue, setInputValue] = useState("");

  const elInput = useRef();
  const count = useRef(0);
  const elItems = useRef([]);

  const onChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const add = (e) => {
    e.preventDefault();
    let value = { num: ++count.current, todo: elInput.current.value };
    setData([...data, value]); // 배열+기존값을 넣지않으면 새로운 값을 넣을때 전의 값이 사라진다. state에서는 dat.apush()못씀

    setInputValue("");
  };

  const remove = (n) => {
    console.log("remove함수");
    let removeData = data.filter((obj) => obj.num !== n);
    setData(removeData);
  };
  const state = (e) => {
    console.log("state함수"); // 이벤트버블링 -> 부모인 li에 걸려있는 state함수실행도 같이 실행됨.
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
        <h1>TodoList</h1>
        <p>{todoNum}개 남음</p>
        <ul className="list">
          {data &&
            data.map((obj, key) => {
              return (
                /*               ref={function(el){
                                elItems.current[0] = el
                              }} */
                <li
                  ref={(el) => (elItems.current[key] = el)}
                  onClick={state}
                  key={obj.num}
                >
                  {obj.todo}
                  {/* 클릭이 됐을 때 실행되어야하므로 함수로 한번 더 묶는다 -> 없으면 이벤트 없어도 그냥 실행 */}
                  <button onClick={() => remove(obj.num)}>삭제</button>{" "}
                </li>
              );
            })}
        </ul>

        <div className="write">
          <form onSubmit={add}>
            <input
              onChange={onChange}
              value={inputValue}
              ref={elInput}
              type="text"
              name="w"
              placeholder="할 일을 입력하세요"
              className="inputText"
            ></input>
            <input type="submit" value="저장" className="inputSubmit"></input>
          </form>
        </div>
      </article>
    </div>
  );
}

export default App;
