import axios from 'axios'

const API = axios.create({ 'baseURL': 'http://localhost:5000/api'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('userProfile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('userProfile')).token}`
        console.log(req.headers.Authorization);
    }

    return req;
})

// posts
export const fetchPosts = () => API.get(`/posts`)
export const createPost = (newPost) => API.post(`/posts`, newPost)
export const deletePost = (id) => API.delete(`/posts/${id}`)
export const updatePost = (id, newPost) => API.patch(`/posts/${id}`, newPost)
export const updateLike = (id) => API.patch(`/posts/${id}/likepost`)

// users
export const registerUser = (userData) => API.post(`/users`, userData)
export const loginUser = (userData) => API.post(`/auth`, userData)