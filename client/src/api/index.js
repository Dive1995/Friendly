import axios from 'axios'

const url = 'http://localhost:5000/api'
export const fetchPosts = () => axios.get(`${url}/posts`)

export const createPost = (newPost) => axios.post(`${url}/posts`, newPost)

export const deletePost = (id) => axios.delete(`${url}/posts/${id}`)

export const updatePost = (id, newPost) => axios.patch(`${url}/posts/${id}`, newPost)

export const updateLike = (id) => axios.patch(`${url}/posts/${id}/likepost`)