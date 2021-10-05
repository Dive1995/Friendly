import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createPost, updatePost } from "../../actions/posts"
import { ButtonContainer, Content, ImagePreview, StyledCreatePost } from "./CreatePost.styled"
import FileBase from 'react-file-base64'
import Button from "../../Styles/Button.styled"
import Input from "../../Styles/Input.styled"
import { setId } from "../../actions/currentId"

const initialPostState = { title:'', creatorId: JSON.parse(localStorage?.getItem('userProfile'))?.user._id, selectedFile:''}

function CreatePost({user}) {
    const dispatch = useDispatch()
    const [ postData, setPostData ] = useState(initialPostState)
    const currentId = useSelector(state => state.currentId)
    const post = useSelector(state => currentId ? state.posts.find(item => item._id === currentId) : null)
    const imageInputRef = useRef()

    useEffect(() => {
        if(post){
            setPostData({...postData, ...post})
        }
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(currentId){
            console.log({postData});
            dispatch(updatePost(currentId, postData))
        }else{
            console.log({postData});
            dispatch(createPost(postData))
        }
        dispatch(setId(null))
        setPostData(initialPostState)
    }

    const clear = (e) => {
        e.preventDefault()
        setPostData(initialPostState)
        dispatch(setId(null))
    }

    // const handleClick = () => {
    //     console.log(imageInputRef.current.value)
    // }

    return (
        <StyledCreatePost>
            {
             user ?   
            <form action="" onSubmit={handleSubmit}>
                <Content>
                    <Input placeholder="What's on your mind!" type="text" value={postData.title} onChange={(e) => setPostData({...postData, title:e.target.value})}/>
                    {/* <label htmlFor="imageFile" >Upload Image</label> */}
                    {/* <input type="file" id="imageFile" /> */}
                    <FileBase
                        id="imageFile"
                        type= "file"
                        value={postData.selectedFile}
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64})}
                    />
                </Content>
                <ImagePreview>
                    <img src={postData?.selectedFile} alt="" />
                </ImagePreview>
                <ButtonContainer>
                    <Button bg="hsl(158, 76%, 58%)" type='submit'>Post</Button>
                    <Button bg="hsl(15, 80%, 67%)" onClick={clear}>Clear</Button>
                </ButtonContainer>
            </form>
            :
            <>
                <p><span>Log In / Sign Up</span> to post your moments with others.</p>
            </>
            }
        </StyledCreatePost>
    )
}

export default CreatePost
