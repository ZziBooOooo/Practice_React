import {useState} from 'react'


function App() {
  
  let [aaa,setAAA] = useState(
      [{num:0, name:'홍길동'},{num:1, name:'ghdsdf'}]
    );

  function test(){
    setAAA(2000);
    
  }

  
  return (
   <>  
       {
        aaa.map(
          function(obj){
            //{num:0, name:'홍길동'}
            return <p key={obj.num}>{obj.name}</p>

          }
        )
       }
       <button onClick={test}></button>
   </>
  );
}

export default App;
