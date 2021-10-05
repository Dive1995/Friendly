const errorReducer = (error = [], action) => {
    switch (action.type) {
        case "ERROR":
            return action.payload

        case "LIKE_ERROR":
            return action.payload
    
        default:
            return error
    }

}

export default errorReducer