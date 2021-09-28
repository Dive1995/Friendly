import * as api from '../api'

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: "FETCH_ALL", payload: data })
    } catch (error) {
        console.log(error);   
    }
}

export const createPost = (postData) => async (dispatch) => {
    try {
        const { data } = await api.createPost(postData)
        dispatch({ type: 'CREATE_POST', payload: data })
    } catch (error) {
        console.log(error);
    }
    // return { type: "CREATE_POST", payload: data }
}

