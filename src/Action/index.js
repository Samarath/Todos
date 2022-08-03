export const storeInputs = (value) => {
    return {
        type: 'CHANGE_INPUTS',
        value
    };
}

export const removeItems = (value) => {
    return {
        type: 'REMOVE_ITEMS',
        value
    }
}

export const chekingDelete = (value) => {
    return {
        type: 'CHECK_DELETE',
        value
    }
}

export const isLogin = (value) => {
    return {
        type: 'LOGIN',
        value
    }
}

export const login = (value) => {
    return {
        type: 'LOG-IN',
        value
    }
}

export const register = (value) => {
    return {
        type: 'REGISTER',
        value
    }
}