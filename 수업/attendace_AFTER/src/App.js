
import './App.scss';
import Insert from './Insert';
import List from './List';
import AttContext,{AppC} from './AttContext';

function App() {

  //출석부, 
  //todolist
  //context api  
  return (
    <AttContext>
      <main>
        <List />
        <Insert />
      </main>
    </AttContext>    
  );
}

export default App;

