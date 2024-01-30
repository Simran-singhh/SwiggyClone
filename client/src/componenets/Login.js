import React, { useRef, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import { checkValidateData } from '../utils/validate';



const Login = () => {
  const navigate=useNavigate()
  
    const[isSignInForm,setisSignInForm]=useState(true);
    const[error,seterror]=useState("")
    let email=useRef(null)
    let name=useRef(null)
    let password=useRef(null)
    const toggleSignInForm=()=>{
      
        setisSignInForm(!isSignInForm)
       
        seterror('')
    }
   
       
     const handleButtonClick = async () => {
        
        const message=checkValidateData(email.current ? email.current.value : 'empty',password.current.value,name.current.value)
        seterror(message)
        if(message && !isSignInForm)return;
       if(!isSignInForm)
        try {
            const requestBody = {
                username: name.current ? name.current.value : null,
                email: email.current ? email.current.value : null,
                password: password.current ? password.current.value : null,
            };

            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            const data = await response.json();

           

            if (response.ok) {
                if (data.success) {
                    // Redirect to the "/home" route after successful signup
                    localStorage.setItem('user', JSON.stringify(data));
                    navigate('/home');
                } else {
                    seterror(data.message);
                }
            } else {
                seterror("User already exists");;
            }
        } catch (error) {
            // seterror(data.message);
        }
        else{
          try {
            const requestBody = {
                username: name.current ? name.current.value : null,
                password: password.current ? password.current.value : null,
            };

            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            const data = await response.json();
            console.log(data);
       if (data.success) {
                    
                    localStorage.setItem('user', JSON.stringify(data));
                    navigate('/home');
                } else {
                    seterror("Invalid username or password")
                }

        } catch (error) {
            seterror("Invalid username or password")
        }

        }
    };

  return (
    <div >
      
       <div className='absolute'>
       {/* <img alt="" aria-hidden="true"className='h-screen w-screen object-fit object-cover' data-uia="nmhp-card-hero+background+image" src={BACKGROUND_COVER}></img> */}
       </div>

       <form onSubmit={(e)=>e.preventDefault()} className='absolute xl:w-3/12  md:w-5/12 w-1/2 shadow-lg  bg-slate-50 p-7  md:p-10 lg:my-20 md:my-20 my-32 mx-auto bg-opacity-80 right-0 left-0 '>
        <h1 className='font-bold text-3xl py-4 text-black text-opacity-100'>{isSignInForm?"Sign In ":"Sign Up"}</h1>
        <input type="text" ref={name} placeholder="name" value={"User01"} className='md:p-4 p-3 md:my-4 my-3 w-full border-radius-sm  bg-slate-100 text-black rounded-md'/>
        {!isSignInForm && <input type="text" ref={email} placeholder="Email address" className='md:p-4 p-3 md:my-4 my-3  w-full border-radius-sm bg-slate-100 text-black  rounded-md'/>}
        <input type="password" ref={password}  placeholder="password" value={"User1234@"} className='md:p-4  p-3 md:my-4 my-3 w-full bg-slate-100 text-black  rounded-md'/>
        <p className=' text-sm px-2 text-red-500 font-semibold'>{error}</p>
        <button className='md:p-4 p-2 md:my-6 my-5 bg-orange-600 w-full rounded-md text-white' onClick={handleButtonClick} >{isSignInForm?"Sign In":"Sign Up"}</button>
        <span className='py-4 text-sm md:text-md text-[#737373]'>{isSignInForm?"New User?":"Already a User?"}</span>
       <span className='text-black text-sm md:text-md cursor-pointer' onClick={toggleSignInForm}> {isSignInForm?"Sign up Now":"Sign In"} </span>
       </form>
    </div>
  )
}

export default Login
