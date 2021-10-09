import { StyledAuth } from "./Auth.styled"
import Button from "../../Styles/Button.styled"
import Input from "../../Styles/Input.styled"
import { useDispatch } from "react-redux"
import { useState } from "react"
import {useHistory} from 'react-router-dom'
import {register, login} from '../../actions/auth'
import {GoogleLogin} from 'react-google-login'


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
        // setFormData({firstName:'', lastName:'',email:'', password:''})
    }


    const googleSuccess = async (res) => {
        const user = res?.profileObj
        const token = res?.tokenId

        try {
            dispatch({type:"AUTH", payload: {user, token}})
            history.push('/')
            
        } catch (error) {
            console.log(error);
        }
    }


    const googleFailure = () => {
        console.log("Google login failed");
    }

    return (
        <StyledAuth>
            {isSignUp ? <h1>Sign Up</h1> : <h1>Sign In</h1>}
            <form onSubmit={handleSubmit}>
                {isSignUp && <div>
                    <Input type="text"  name="firstName" placeholder="First Name" onChange={handleChange}/>
                    <Input type="text"  name="lastName" placeholder="Last Name" onChange={handleChange}/>
                </div>}
                <Input type="email"  name="email" placeholder="Email" onChange={handleChange}/>
                <Input type="password"  name="password" placeholder="Password" onChange={handleChange}/>
                <Button bg={isSignUp ? "blue" : "green"} type="submit">{isSignUp ? "Sign Up" : "Sign In"}</Button>

                <GoogleLogin
                    clientId="1013389727217-f33t6k2cl8rs60ih3bck1h1ftvv3i82d.apps.googleusercontent.com"
                    render={(renderProps) => (
                        <Button bg='dodgerblue' onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                />

                
            </form>
            <a onClick={() => setIsSignUp((isSignUp) => !isSignUp)}>{isSignUp ? "Already have an account?" : "Don't have an account?"}</a>
        </StyledAuth>
    )
}

export default Auth
