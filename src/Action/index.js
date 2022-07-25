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