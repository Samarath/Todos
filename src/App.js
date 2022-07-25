import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Todos from './Component/Todos/Todos';
import { storeInputs, removeItems, chekingDelete } from './Action/index';


function App() {

  const storingInputs = useSelector((state) => state.storeTheInputs);
  const removingItems = useSelector((state) => state.removeTheItems);
  const checkDelete = useSelector((state) => state.checkingTheDelete)
  const dispatch = useDispatch();


  useEffect(() => {
      vanishItem();
  }, [checkDelete]);

   const inputs = (e) => {
      const getInput = document.getElementById('input').value;

      if(getInput !== ''){
        dispatch(storeInputs([...storingInputs, getInput]));
    
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

         dispatch(removeItems(Number(delItem)));

        //  setCheckingDel([...checkingDel, delItem]);
         dispatch(chekingDelete([...checkDelete, delItem]));
        //  console.log(checkDelete, checkingDel)
      }
    }


   } 

   const vanishItem = () =>{
     const store = [...storingInputs];
     const fil = store.filter((item, i) => {
      if(i !== removingItems) {
        return item;
      }
     })
     dispatch(storeInputs(fil));
   }

   const EditTodos = (value) => {
    const workList = document.getElementsByClassName('itemList');
    for (let i = 0; i < workList.length; i++) {

      if(workList[i].innerHTML === value){
         const getForEdit = workList[i];
         let editedTodos = prompt("Edit your todos");
         console.log(editedTodos)
         if(editedTodos !== ''){
          getForEdit.textContent = editedTodos;
                  console.log(getForEdit.textContent)

                  const delItem = workList[i].parentElement.classList[1].replace('}', '');
                  console.log(delItem);
                  const mapped = storingInputs.map((item, i) => {
                    if(i === Number(delItem)){
                      return editedTodos;
                    }else{
                      return item;
                    }
                  });
                  dispatch(storeInputs([...mapped]));
         }
         
         
      }
    }
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
      
          {storingInputs.map((item, i) => {
          
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
