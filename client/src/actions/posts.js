import * as api from '../api'

export const getPosts = (pageNumber, pageSize) => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts(pageNumber, pageSize)
        dispatch({ type: "FETCH_ALL", payload: data })
    } catch (error) {
        dispatch({type: "ERROR", payload: error.response})
    }
}

export const createPost = (postData) => async (dispatch) => {
    try {
        const { data } = await api.createPost(postData)
        dispatch({ type: 'CREATE_POST', payload: data })
    } catch (error) {
        dispatch({type: "ERROR", payload: error.response})
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        dispatch({ type: "DELETE_POST", payload: id })
    } catch (error) {
        dispatch({type: "ERROR", payload: error.response})
    }
}

export const updatePost = (id, newPost) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id, newPost)
        dispatch({ type: "UPDATE_POST", payload: { id, data }})
    } catch (error) {
        dispatch({type: "ERROR", payload: error.response})
    }
}

export const updateLike = (id) => async (dispatch) => {
    try {
        const {data} = await api.updateLike(id)
        dispatch({type:"UPDATE_LIKE", payload: {id, data}})
    } catch (error) {
        dispatch({type: "ERROR", payload: error.response})
    }
}