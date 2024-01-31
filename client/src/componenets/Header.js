import { useState,useContext, useEffect,  } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeResData } from "../utils/restrauntSlice";
import { emptycart } from "../utils/cartSlice";


const Header=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const cartItems=useSelector((store)=>
        store.cart.items
    )
    const user=localStorage.getItem('user');
   
     useEffect(()=>{
      if(!user )navigate('/login')
      else navigate('/home')
     },[]) 
     const[btnName,setbtnName]=useState("Login");
     const cartItemsLength = cartItems && Object.keys(cartItems).length;
    const handleLogout = async () => {
        try {
          
          const response = await fetch('http://localhost:3000/logout', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            });
           if (response.ok) {
           localStorage.removeItem('user');
            dispatch(emptycart());
            dispatch(removeResData())
              navigate('/login')
          } else {
            
            console.error('Logout failed:', response.statusText);
          }
        } catch (error) {
          console.error('Error during logout:', error);
        }
      };
  return(
        <div className='flex   bg-slate-50 shadow-md md:justify-between  justify-start sticky top-0 ' >
            <div className='md:w-[80px] w-[60px] md:my-1 md:mx-4'>
               <img src={LOGO_URL}/>
            </div>
            {user && <div className="mt-[5px]  ">
               <ul className='flex  justify-end  ml-[100px] md:p-4 md:ml-4 mb-2 mt-3'>
                
                <li className='md:mx-5 sm:mx-2 mx-2 hover:text-orange-400'><Link to="/home">Home</Link></li>
                <li className='md:mx-5 sm:mx-3 mx-2 text-slate-400 hover:text-orange-400 pointer-events-none '>About</li>
                <li className='md:mx-5 sm:mx-3 mx-2 text-slate-400 hover:text-orange-400 pointer-events-none '><Link to="/contact">Contact Us</Link></li>
                <li className='md:mx-5 sm:mx-3 mx-2 hover:text-orange-400'><Link to="/cart"><svg xmlns="http://www.w3.org/2000/svg" className="inline-block" height="20" width="22" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>{cartItemsLength>0?<sup className="text-red-600 text-base font-semibold">{cartItemsLength}</sup>:""}</Link></li>
                <button className="md:mx-3 sm:mx-2  mx-2 px-1 py-1 text-xs md:text-sm bg-orange-400 text-white rounded-md" name="Login" onClick={handleLogout}>Logout</button>
               {/* <li className='md:mx-5 ml-3 text-black hover:text-orange-400'>{user.username}</li> */}
               </ul>
             </div>}
        </div>
    )
}

export default Header;
