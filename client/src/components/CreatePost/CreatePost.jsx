import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createPost, updatePost } from "../../actions/posts"
import { ButtonContainer, Content, StyledCreatePost } from "./CreatePost.styled"
import FileBase from 'react-file-base64'
import Button from "../../Styles/Button.styled"
import Input from "../../Styles/Input.styled"

function CreatePost() {
    const dispatch = useDispatch()
    const [ postData, setPostData ] = useState({ title:'', creator:'Akka Samayal', selectedFile:''})
    const currentId = useSelector(state => state.currentId)
    const post = useSelector(state => currentId ? state.posts.find(item => item._id === currentId) : null)


    useEffect(() => {
        if(post){
            setPostData(post)
        }
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(currentId){
            dispatch(updatePost(currentId, postData))
        }else{
            dispatch(createPost(postData))
        }
        setPostData({ title:'', creator:'Dive', selectedFile:''})
    }

    const clear = (e) => {
        e.preventDefault()
        setPostData({ title:'', creator:'Dive', selectedFile:''})
    }


    return (
        <StyledCreatePost>
            <form action="" onSubmit={handleSubmit}>
                <Content>
                    <Input placeholder="What's on your mind!" type="text" value={postData.title} onChange={(e) => setPostData({...postData, title:e.target.value})}/>
                    {/* <input type="text" value={postData.message} onChange={(e) => setPostData({...postData, message:e.target.value})}/> */}
                    <FileBase
                        type= "file"
                        value={postData.selectedFile}
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64})}
                    />
                </Content>
                <ButtonContainer>
                    <Button bg="green" type='submit'>Post</Button>
                    <Button bg="red" onClick={clear}>Clear</Button>
                </ButtonContainer>
            </form>
        </StyledCreatePost>
    )
}

export default CreatePost
