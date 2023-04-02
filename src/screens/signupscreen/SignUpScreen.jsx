import React, { useState } from 'react'
import './SignUpScreen.css'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'


const SignUpScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((authUser) => {
      console.log(authUser);
    }).catch((error) => {
      console.log(error);
    })
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((authUser) => {
      console.log(authUser)
    }).catch((error) => {
      console.log(error);
    })
  };

  return (
    <div className='signupscreen'>
      <form onSubmit={register}>
        <h1>Sign In</h1>
        <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        type="email" 
        placeholder='Email' 
        />
        <input 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        type="password" 
        placeholder='Password' 
        />
        <button onClick={signIn} type='submit'>Sign In</button>
        <h4>
          <span className='gray'>New to Netflix? </span>
          <span type='submit' onClick={register} className='link'>Sign Up Now</span>
          </h4>
      </form>
    </div>
  )
}

export default SignUpScreen
