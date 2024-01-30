import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
const Header=()=>{
    const[btnName,setbtnName]=useState("Login");
    const  data=useContext(userContext);
    //subscribing to the cart
    const cartItems=useSelector((store)=>
        store.cart.items
    )
    const cartItemsLength = cartItems && Object.keys(cartItems).length;
    console.log("cart",cartItems);
    return(
        <div className='flex   bg-slate-50 shadow-md justify-between sticky top-0 ' >
            <div className='w-[80px] my-1 mx-4'>
               <img src={LOGO_URL}/>
            </div>
             <div >
               <ul className='flex  p-4 mx-4 mb-2 mt-3'>
                
                <li className='mx-5 hover:text-orange-400'><Link to="/">Home</Link></li>
                <li className='mx-5  hover:text-orange-400'><Link to="/about">About</Link></li>
                <li className='mx-5  hover:text-orange-400'><Link to="/contact">Contact Us</Link></li>
                <li className='mx-5  hover:text-orange-400'><Link to="/cart"><svg xmlns="http://www.w3.org/2000/svg" className="inline-block" height="20" width="22" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>{cartItemsLength>0?<sup className="text-red-600 text-base font-semibold">{cartItemsLength}</sup>:""}</Link></li>
                <button className="mx-7 px-2 py-1 bg-orange-400 text-white rounded-md" name="Login" onClick={()=>{
                    btnName=="Login"?
                    setbtnName("Logout")
                    :setbtnName("Login");
                }}
                >{btnName}</button>
               <li> {data.loggedUser}</li>
               </ul>
             </div>
        </div>
    )
}

export default Header;