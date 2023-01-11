import { useEffect, useRef, useState } from "react";
import "./App.scss";
import Item from "./component/Item";
import List from "./component/List";
import Insert from "./component/Insert";

function App() {
  //todolist 프로젝트 생성
  //sass
  const [data, setData] = useState([]),
    [todoNum, setTodoNum] = useState(0),
    elItems = useRef([]),

  const add = (value) => {
    //input값을 받아서와 data변수에 넣어주는 일
    setData([...data, value]);
  };

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
        <List data={data} todoNum={todoNum}>
          <Insert add={add} />
        </List>
      </article>
    </div>
  );
}

export default App;
