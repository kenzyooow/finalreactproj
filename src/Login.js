import './Login.css';
import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import {auth} from './firebase'

function Login(){

    const history = useHistory();
    const [useremail, setUseremail] = useState('')
    const [userpassword, setUserpassword] = useState('')

    const loginuser = event =>{
        event.preventDefault()
        auth.signInWithEmailAndPassword(useremail, userpassword)
        .then((auth) => {
            history.push('/')
        })
        .catch(e => alert(e.message))
    }

    const signupuser = event =>{
        event.preventDefault()
        auth.createUserWithEmailAndPassword(useremail, userpassword)
        .then(auth =>{
            history.push('/');
        })
        .catch(e => alert(e.message))
    }

    return(
        <div className="login">
            <Link>
            <img className="login-logo" src="https://e7.pngegg.com/pngimages/930/269/png-clipart-service-mark-symbol-registered-trademark-symbol-service-miscellaneous-angle.png" alt=""/>
            </Link>
            <div className="login-container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={useremail} onChange={event=> setUseremail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={userpassword} onChange={event=> setUserpassword(event.target.value)} type="password"/>
                    <button onClick={loginuser} type="submit" className="login-signInBtn">Sign In</button>
                </form>
                <p className="new-acc">If you want to create a new account, Just type your email and password and then Create new account.</p>
                <button onClick={signupuser} className="login-registrationBtn">Create new Account</button>
            </div>
        </div>
    )

}

export default Login