    import './Todos.css'

    const Todos = ({currentInput, getItem, selector , EditTodos}) => {

        return (
            <>
        
            <div className={`todos ${selector}}`}>
                <div className='itemList'>
                  {currentInput}
                </div>
                <div>
                  <button
                     onClick={() => EditTodos()} >
                    Edit
                  </button>  
                  <button 
                     onClick={() => getItem(currentInput)}>
                     Delete
                  </button>
                </div>
            </div>
            </>
        )
    }

    export default Todos;