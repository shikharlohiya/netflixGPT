import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
   const [isSignIn , setIsSignIn] = useState(true);

   const toggleSignInForm =()=>{
    setIsSignIn(!isSignIn)
   }

  return (
    <div>
    <div><Header/>
    </div>
    <div className='absolute'> 
        < img src = "https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo"/>
    </div>
    <form className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-70'>
     <h1 className='font-bold text-3xl py-2'>Sign In</h1>
         
   {!isSignIn && <input 
        type ='text'
         placeholder='Full Name' 
         className='p-2 my-2 w-full bg-gray-700' />
   }



        <input 
        type ='text'
         placeholder='Email Address' 
         className='p-2 my-2 w-full bg-gray-700' />

        <input type ='password'
         placeholder='Password' 
         className='p-2 my-2 w-full bg-gray-700'/>

        <button className='p-4 my-2 bg-red-700 w-full'>{isSignIn ? "SignIn" : "SignUp"}</button>
        <p  className = "cursor-pointer"onClick={toggleSignInForm}>{isSignIn ? "New to Netflix? Sign up now" : "Already Sign In " } </p>


    </form>

    </div>
  )
}

export default Login