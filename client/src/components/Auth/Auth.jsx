import { StyledAuth } from "./Auth.styled"
import Button from "../../Styles/Button.styled"
import Input from "../../Styles/Input.styled"
import { useDispatch } from "react-redux"
import { useState } from "react"
import {useHistory} from 'react-router-dom'
import {register, login} from '../../actions/auth'


function Auth() {
    const [isSignUp, setIsSignUp] = useState(false)
    const [formData, setFormData] = useState({firstName:'', lastName:'',email:'', password:''})
    const dispatch = useDispatch()
    const history = useHistory()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isSignUp){
            dispatch(register(formData, history))
        }else{
            dispatch(login(formData, history))
        }
        setFormData({firstName:'', lastName:'',email:'', password:''})
    }

    return (
        <StyledAuth>
            {isSignUp ? <h1>Sign Up</h1> : <h1>Sign In</h1>}
            <form onSubmit={handleSubmit}>
                {isSignUp && <div>
                    <Input type="text" name="firstName" placeholder="First Name" onChange={handleChange}/>
                    <Input type="text" name="lastName" placeholder="Last Name" onChange={handleChange}/>
                </div>}
                <Input type="email" name="email" placeholder="Email" onChange={handleChange}/>
                <Input type="password" name="password" placeholder="Password" onChange={handleChange}/>
                <Button bg={isSignUp ? "blue" : "green"} type="submit">{isSignUp ? "Sign Up" : "Sign In"}</Button>
            </form>
            <a href='' onClick={() => setIsSignUp(!isSignUp)}>{isSignUp ? "Already have an account?" : "Don't have an account?"}</a>
        </StyledAuth>
    )
}

export default Auth
