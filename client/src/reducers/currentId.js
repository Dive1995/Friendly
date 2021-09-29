export const currentId = (currentId = null, action) => {
    switch (action.type) {
        case "SET_ID":
            return action.payload;
    
        default:
            return currentId;
    }
}