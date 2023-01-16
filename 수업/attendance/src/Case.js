
import './App.scss';
import Insert from './Insert';
import List from './List';
import { useEffect, useState } from 'react';
import {AttContext} from './AttContext';

function App() {

  //출석부, 
  //todolist
  //context api
  const [data, setData] = useState([]);
  
  function dataCtl(type, value){
    switch(type){
      case 'insert' : 
        const insert = [...data,value];
        setData(insert);
        break;
      case 'modify' : 
        // setData(data.map((obj)=>(obj.id === num)?{...obj,name:'홍길동'}:obj)); 
        break;
      case 'remove' : 
        // setData(data.filter((obj)=>obj.num !== num))
        break;
    }
  }

  //추가
  function insert(){
    const insert = [...data,{ id: 4, name: 'sewon' }];
    setData(insert);
  }

  //수정
  function modify(num){
    setData(data.map((obj)=>(obj.id === num)?{...obj,name:'홍길동'}:obj));
    /* 
      const modify = data.map(
                    function(obj){
                      if(obj.id === num){  obj.name = '홍길동'  }
                      return obj;
                    }
                  )
      setState(modify); 
    */
  }

  //삭제
  function remove(num){
    setData(data.filter((obj)=>obj.num !== num))
    /* 
      setState(
        data.filter(
          function(obj){
            return obj.num !== 2;
          }
        )
      )
    */
  }


  
  return (
    <AttContext.Provider value={dataCtl}>
    <main>
      <Insert></Insert>
    </main>
    </AttContext.Provider>  
  );
}

export default App;

