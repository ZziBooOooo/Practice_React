import "./App.scss";
import { useState, useRef, useEffect } from "react";
import { MyContext } from "./Context";
import List from "./component/List";
import Write from "./component/Write";

function App() {
  const [data, setData] = useState([]);
  const [todoNum, setTodoNum] = useState(0);
  const [editText, setEditText] = useState("");

  const add = (value, type) => {
    console.log(type);

    setData([...data, value]); // 배열+기존값을 넣지않으면 새로운 값을 넣을때 전의 값이 사라진다. state에서는 dat.apush()못씀
    // console.log(data);
  };

  const remove = (n) => {
    console.log("remove함수");
    let removeData = data.filter((obj) => obj.num !== n);
    setData(removeData);
  };

  const update = (n) => {
    if (window.event.target.tagName !== "BUTTON") {
      let dataCopy = data.map((obj) => {
        if (obj.num == n) {
          obj.checked = !obj.checked;
        }
        return obj;
      });
      setData(dataCopy);
    }
  };

  useEffect(() => {
    let count = data.filter((obj) => obj.checked === false).length;
    /*     console.log(data);
    console.log(count); */
    setTodoNum(count);
  }, [data]);

  return (
    <MyContext.Provider
      value={{
        data: data,
        setData: setData,
        setEditText: setEditText,
        editText: editText,
      }}
    >
      <div className="App">
        <article>
          <List
            data={data}
            todoNum={todoNum}
            remove={remove}
            update={update}
          ></List>
          <Write add={add}></Write>
        </article>
      </div>
    </MyContext.Provider>
  );
}

export default App;
