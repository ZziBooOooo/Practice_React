
//AttContext.js
import {createContext, useState} from 'react';
export const AppC = createContext(null);

const AttContext = ({children}) => {

    const [data, setData] = useState([]);
    const [type, setType] = useState(['insert',0]);

    function dataCtl(type, value){
        switch(type){
        case 'insert' : 
            const insert = [...data,value];
            setData(insert);
            break;
        case 'modify' : 
            setData(data.map((obj)=>(obj.id === value.id)?{...obj,name:value.name}:obj)); 
            setType(['insert',0]);
            break;
        case 'remove' : 
        console.log('aaa')
            setData(data.filter((obj)=>obj.id !== value))
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
    <AppC.Provider value={  {dataCtl, data, type, setType}   }> {children} </AppC.Provider>
                   

  )
}

export default AttContext