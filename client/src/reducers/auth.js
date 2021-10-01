const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case "AUTH":
            console.log("Auth called : "+ action.payload);
            localStorage.setItem('userProfile', JSON.stringify({...action.payload}))
            return {...state, authData: action.payload}

        case "LOG_OUT":
            localStorage.clear()
            return {...state, authData: null}
    
        default:
            return state
    }
}

export default authReducer