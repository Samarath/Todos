const initialState = [];

const storeTheInputs = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_INPUTS':
            return action.value
    
        default: return state;
    }
}

export default storeTheInputs;