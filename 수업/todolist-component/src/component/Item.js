import React from "react";

const Item = (obj, key) => {
  return (
    <li ref={(el) => (elItems.current[key] = el)} onClick={state} key={obj.num}>
      {obj.todo}
      <button onClick={() => remove(obj.num)}>삭제</button>
    </li>
  );
};

export default Item;
