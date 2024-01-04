import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addItem } from '../utils/cartSlice';

const ShoppingCart = () => {
  const addedItems=useSelector((store)=>store.cart.items)
  const dispatch=useDispatch();
   const handleAdditems=(item)=>{
    dispatch(addItem(item));
   }


   let total=0;
 
  if(addedItems.length>0)
  return (
    <div className=' w-7/12 bg-slate-50 ml-[300px] mt-12 p-4 shadow-lg'> 
     { 
       addedItems.map((item)=>{
       const{name,price,defaultprice,isVeg}=item.card.info;
        total+=price!=null?price/100:defaultprice/100;

       return (<div className='flex w-7/12 bg-slate-50 p-4 ml-[150px] shadow-sm flex-row  border-b-slate-200 border-b-2  border-dotted justify-between'>
            <div className='flex flex-row'>
               {  isVeg==1?
            <svg xmlns="http://www.w3.org/2000/svg" className='fill-green-500 mr-2 mt-1' height="16" width="16" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
            :<svg xmlns="http://www.w3.org/2000/svg" height="16" className='fill-red-500 mr-2 mt-1 ' width="16" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
               }
                <h1>{name}</h1>
              </div>
              
                <div className='w-20 h-7 border-black px-2 border-2 flex flex-row justify-between'>
                  <button>-</button>
                  <span>0</span>
                  <button onClick={()=>handleAdditems(item)}>+</button>
                </div>

                <p>Rs.{price!=null?price/100:defaultprice/100}</p>
             </div>)
      })}
      <div className='ml-[200px] w-5/12'>
       <p className='font-semibold mt-10 ml-10 '> Bill details </p>
       <div className='font-light mt-3 ml-10  flex flex-row justify-between'>
         <p>Item Total</p>
         <p>{total}</p>
       </div>
       <div className='font-light mt-3 ml-10  flex flex-row justify-between'>
         <p>Delievery Fee|</p>
         <p>{total}</p>
       </div>
       </div>
    </div>

    
  )
  else
   return <h1>Please add items</h1>
}

export default ShoppingCart

