import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { increment, decrement, multiply, divide } from "./createSlice";
import "./App.css";

function App() {
  // 사용할 때 -> store에 등록한 counter를 불러옴
  const { count } = useSelector((state) => state.counter);
  const { count2 } = useSelector((state) => state.counter2);
  console.log(count);
  // 일 시킬 때
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement(1))}>-</button>
      {count}
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(multiply(2))}>*</button>
      {count2}
      <button onClick={() => dispatch(divide(2))}>/</button>
    </div>
  );
}

export default App;
