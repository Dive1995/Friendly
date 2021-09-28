import { useState } from "react"
import { useDispatch } from "react-redux"
import { createPost } from "../../actions/posts"
import { StyledCreatePost } from "./CreatePost.styled"
import FileBase from 'react-file-base64'

function CreatePost() {
    const dispatch = useDispatch()
    const [ postData, setPostData ] = useState({ title:'', message:'', creator:'Dive', selectedFile:''})


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createPost(postData))
    }

    const clear = () => {

    }


    return (
        <StyledCreatePost>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={postData.title} onChange={(e) => setPostData({...postData, title:e.target.value})}/>
                <input type="text" onChange={(e) => setPostData({...postData, message:e.target.value})}/>
                <FileBase
                    type= "file"
                    multiple={false}
                    onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64})}
                />
                <button type='submit'>Add Posts</button>
                <button onClick={clear}>Clear</button>
            </form>
        </StyledCreatePost>
    )
}

export default CreatePost
