import { useState, useRef } from "react";
import { MyContext } from "./component/Context";
import Popup from "./component/Popup";
import List from "./component/List";
import "./scss/app.css";

function App() {
  const [style, setStyle] = useState(false);
  const [data, setData] = useState([]);

  /* 버튼눌렀을때 false이면 popUpBox에 show클래스 추가 */
  const showPopUp = () => {
    setStyle((style) => !style);
    // console.log(style);
  };
  return (
    <MyContext.Provider
      value={{ style: style, setStyle: setStyle, data: data, setData: setData }}
    >
      <div className="App">
        <div className="contentBox">
          <button className="addBtn" onClick={showPopUp}>
            +
          </button>
          <List></List>
          <Popup></Popup>
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
