const postReducer = (posts = [], action) => {
    switch (action.type){
        case "FETCH_ALL":
            posts = action.payload
            return posts

        case "CREATE_POST":
            // posts.push(action.payload)
            return [ ...posts, action.payload ]
        default :
            return posts;
    }
}

export default postReducer