import "./App.css";
import { MyContext } from "./Context";
import List from "./List";
import Item from "./Item";
import { createContext, useContext, useState } from "react";

/* List,Item 컴포넌트에게 사용한다고 알려줘야됨 -> Context.js 생성 */

function App() {
  const num = 100;
  const [data, setData] = useState([
    { num: 0, todo: "리액트 열심히 해야지 ^ㅗ^" },
    { num: 1, todo: "굿" },
  ]);

  return (
    <div className="App">
      <MyContext.Provider value={{ data: data, setData: setData }}>
        <List />
      </MyContext.Provider>
    </div>
  );
}

export default App;
