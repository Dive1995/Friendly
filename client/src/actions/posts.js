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

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        dispatch({ type: "DELETE_POST", payload: id })
    } catch (error) {
        console.log(error);
    }
}