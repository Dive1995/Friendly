const errorReducer = (error = {}, action) => {
    switch (action.type) {
        case "ERROR":
            return {message: action.payload.data.message, status: action.payload.status, isAlert: true}

        case "LIKE_ERROR":
            return action.payload
    
        default:
            return error
    }

}

export default errorReducer