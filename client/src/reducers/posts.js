import axios from "axios"

const postReducer = (state, action) => {
    switch (action.type){
        case "CREATE_POST":
            state.push(action.payload)
            return state

    }
}

axios.post(url, { body: {} })