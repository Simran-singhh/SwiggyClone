import React, { useState } from 'react'
import { CDN_URL } from '../utils/constants'
import { addItem,removeitem } from '../utils/cartSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
const Item = ({item}) => {
    const{name,description,ratings,price,imageId,defaultPrice,isVeg,id}=item?.card?.info
    const[quantity,setquantity]=useState(0);
    const cartItems=useSelector((store)=>store.cart.items)
    useEffect(() => {
      if (cartItems&&cartItems[id]!=undefined){
        setquantity(cartItems[id].quantity);
        }
    })
    
  
const dispatch=useDispatch();
const handleAdditems=(item,val)=>{
  dispatch(addItem(item));
  setquantity(val+1)
 }

 const handleRemoveItem = (item,val) => {
 dispatch(removeitem(item))
 setquantity(val-1)
}
 



   return( <div className=' flex flex-row justify-between mt-8 p-4  bg-gray-100'>
      
       <div className='w-8/12 mt-3'>
       {  isVeg==1?
        <svg xmlns="http://www.w3.org/2000/svg" className='fill-green-500 mb-2' height="16" width="16" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
       :<svg xmlns="http://www.w3.org/2000/svg" height="16" className='fill-red-500 mb-2' width="16" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
        }
         <span className='font-bold'>{name}</span>
         <span className='font-bold ml-5'><svg xmlns="http://www.w3.org/2000/svg" className='inline-block' height="16" width="10" viewBox="0 0 320 512"><path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z"/></svg>
         {price!=null?price/100:defaultPrice/100}</span>
         

         {ratings?.aggregatedRating?.rating&& ( <p className='text-orange-500'><svg xmlns="http://www.w3.org/2000/svg" className='inline-block mr-1 fill-orange-400' height="12" width="14" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>
         {ratings?.aggregatedRating?.rating}
         </p>)}
         
         <p className='font-light'>{description}</p>
       </div>

         {(imageId!=null)?(
         <div className='w-3/12  '>
         
         <div className='absolute '>
        {quantity==0?( <button className='py-2 px-5 mx-10 mt-[66px] shadow-sm rounded-md bg-white text-green-500' onClick={()=>handleAdditems(item,quantity)}>Add</button>):(<div className='mx-10 mt-[66px] shadow-sm rounded-md bg-white text-green-500'> <button className='m-2' onClick={()=>handleRemoveItem(item,quantity)}>-</button><span className='px-1'>{quantity}</span><button className='m-2' onClick={()=>handleAdditems(item,quantity)}>+</button></div>)}</div>
         <img className='w-36 h-24 rounded-lg' src={CDN_URL+imageId}/>
         </div>):(<div className='mr-16'> {quantity==0?(<button className='py-2 px-5  mx-4 my-8 rounded-md bg-white text-green-500 shadow-sm ' onClick={()=>handleAdditems(item,quantity)}>Add</button>):(<div className='py-2 px-3 mx-4 my-8 rounded-md bg-white text-green-500 shadow-sm'> <button  onClick={()=>handleRemoveItem(item,quantity)}>-</button><span className='px-2'>{quantity}</span><button  onClick={()=>handleAdditems(item,quantity)}>+</button></div>)}</div>)
         }

     </div>)
}

export default Item
