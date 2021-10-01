import * as api from '../api'

export const register = (userdata, history) => async (dispatch) => {
    try {
        const {data} = await api.registerUser(userdata)
        console.log(data);
        dispatch({type:"AUTH", payload: data})
        history.push('/')
    } catch (error) {
        console.log(error);
    }
}

export const login = (loginData, history) => async (dispatch) => {
    try {
        const {data} = await api.loginUser(loginData)
        dispatch({type:"AUTH", payload: data})
        history.push('/')
    } catch (error) {
        console.log(error);
    }
}