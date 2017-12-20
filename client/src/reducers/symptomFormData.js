const initialState = {
    active: false,    
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_SYMPTOM_FORM':     
            return Object.assign({}, state, { active: action.active })
        default:
            return state
    }
}