import React, { useContext } from "react";
import { AttContext } from "./AttContext";

const Insert = () => {
  const [input, setInput] = useState("");
  const context = useContext(AttContext);

  console.log(context);
  // context("insert", { id: 1, name: "홍길남" }); 이렇게하면 함수부름->insert에는 setData->렌더링-> <Insert>컴포넌트 실행 -> 함수부름 -> 무한반복

  return (
    <div>
      <input
        type="test"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button
        onClick={() => {
          context("insert", { id: 1, name: input });
        }}
      >
        저장
      </button>
    </div>
  );
};

export default Insert;
