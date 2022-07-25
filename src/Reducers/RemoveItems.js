const initialState = '';

const removeTheItems = (state = initialState, action) => {
    switch (action.type) {
        case 'REMOVE_ITEMS':
            return action.value
    
        default: return state;
    }
}

export default removeTheItems;