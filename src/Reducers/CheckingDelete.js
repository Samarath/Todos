const initialState = [];

const checkingTheDelete = (state = initialState, action) => {
    switch (action.type) {
        case 'CHECK_DELETE':
            return action.value
    
        default: return state;
    }
}

export default checkingTheDelete;