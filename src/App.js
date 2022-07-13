import { useEffect, useState } from 'react';
import './App.css';
import Todos from './Component/Todos/Todos';


function App() {

  const [storeInput, setStoreInput] = useState([]);
  const [removeItem, setRemoveItem] = useState('');
  const [checkingDel, setCheckingDel] = useState([]);

  useEffect(() => {
      vanishItem();
  }, [checkingDel]);

   const inputs = (e) => {
      const getInput = document.getElementById('input').value;

      if(getInput !== ''){
        setStoreInput([...storeInput, getInput]); 
      }
    
      //cleaning input after add button is clicked
      const cleanInput = document.getElementById('input');
      cleanInput.value = ''
    }

   const getItem = (value) => {
    
     const workList = document.getElementsByClassName('itemList');
     for (let i = 0; i < workList.length; i++) {

      if(workList[i].innerHTML === value){
         const delItem = workList[i].parentElement.classList[1].replace('}', '');
         setRemoveItem(Number(delItem)); 
         setCheckingDel([...checkingDel, delItem])
      }
    }


   } 

   const vanishItem = () =>{
     const store = [...storeInput];
     const fil = store.filter((item, i) => {
      if(i !== removeItem) {
        return item;
      }
     })
     setStoreInput(fil);
   }

   const EditTodos = () => {
    console.log('edit');
   }

  return (
    <div className="App">
      <div className='heading'>
        <h1>Todo List</h1>
        <p>MAKING LIFE BETTER</p>
      </div>
      <div>
        <input type='text' name='text' id='input'/>
        <button onClick={() => inputs()} className='button glow-button'>Add</button>
      </div>
      
          {storeInput.map((item, i) => {
          
          return (
              
             <Todos 
                currentInput={item}
                key={i} 
                getItem={getItem}
                selector={i}
                EditTodos={EditTodos}
              />
          
          );
        })}

      
      
    </div>
  );
}

export default App;
