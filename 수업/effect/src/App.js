import "./App.css";
import { Link, HashRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import List from "./page/List";
import Write from "./page/Write";

function App() {
  let [itemData, setItemData] = useState({ n: "", v: "" });

  function params(data) {
    console.log(data);
    setItemData(data);
  }
  return (
    <HashRouter>
      {/*       {itemData} */}
      {/* 함수 실행 전 출력되기 때문에 빈값 -> useState이용하면 값이 변경되면 재렌더링되기 때문에 정상출력됨*/}
      <Routes>
        {/* Wrtie컴포넌트는 fn이라는 함수를 갖게되었따. */}
        <Route path="/write" element={<Write fn={params} />}></Route>
        <Route exact path="/" element={<List item={itemData} />}></Route>
      </Routes>
    </HashRouter>
  );
}
export default App;
