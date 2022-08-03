const initialStage = 'login';

const loginOrRegister = (state = initialStage, action) => {
    switch (action.type) {
        case 'LOG-IN':
            return action.value
        case 'REGISTER':
            return 'register'
        default: return state
    }
}

export default loginOrRegister;