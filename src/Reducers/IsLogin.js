const initialState = false;

const userLogin = (state=initialState, action) => {
    switch(action.type){
        case 'LOGIN':
            return action.value
        default: return state    
    }
}

export default userLogin;
