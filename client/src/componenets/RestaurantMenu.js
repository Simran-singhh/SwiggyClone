import React, { useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import RestaurantCategory from './RestaurantCategory'

const RestaurantMenu = () => {
    
 
  const{resId}=useParams();
  const resInfo=useRestaurantMenu(resId)
  const[ShowIndex,setShowIndex]=useState(null);
  
  if(resInfo.length==0) return

  const{name,costForTwoMessage,cuisines,locality,feeDetails,sla,avgRating}=resInfo[0].card.card.info
  const{itemCards}=resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log("itemCards",resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards)
  // console.log(itemCards)

  const categories=resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
    c?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  //  console.log(categories);

   

   

  return (
    <div className='flex-col bg-slate-50 w-[1100px] mx-[200px] px-10 pb-5 mt-10 shadow-lg'>

     <div className='flex justify-between font-semibold text-lg pt-10 pl-8  border-b-slate-300 border-b-2'>
      <h1>{name} </h1>

      <div className="bg-slate-100 w-[50px] border-2 h-[50px] mb-2">
       <span className="font-light text-xs my-2 border-b-slate-100 border-1 border-dashed">
            <svg className="inline-block m-1 my-2" xmlns="http://www.w3.org/2000/svg" height="12" width="10" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>{avgRating} </span>
      </div>

     </div>

      <div className='  font-light  text-sm mt-2 px-10'>
       <p>{locality}</p>
       <p>{costForTwoMessage}</p>
      </div>

       <div className=' border-b-slate-300 border-b-2 border-dotted mt-4 px-8 pb-3'>
       <svg xmlns="http://www.w3.org/2000/svg" className='inline-block mr-2 ' height="16" width="20" viewBox="0 0 640 512"><path d="M280 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h57.7l16.4 30.3L256 192l-45.3-45.3c-12-12-28.3-18.7-45.3-18.7H64c-17.7 0-32 14.3-32 32v32h96c88.4 0 160 71.6 160 160c0 11-1.1 21.7-3.2 32h70.4c-2.1-10.3-3.2-21-3.2-32c0-52.2 25-98.6 63.7-127.8l15.4 28.6C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L418.2 128H480c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H459.6c-7.5 0-14.7 2.6-20.5 7.4L391.7 78.9l-14-26c-7-12.9-20.5-21-35.2-21H280zM462.7 311.2l28.2 52.2c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-28.2-52.2c2.3-.3 4.7-.4 7.1-.4c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64c0-15.5 5.5-29.7 14.7-40.8zM187.3 376c-9.5 23.5-32.5 40-59.3 40c-35.3 0-64-28.7-64-64s28.7-64 64-64c26.9 0 49.9 16.5 59.3 40h66.4C242.5 268.8 190.5 224 128 224C57.3 224 0 281.3 0 352s57.3 128 128 128c62.5 0 114.5-44.8 125.8-104H187.3zM128 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
       <span>{feeDetails.message}</span>
       </div>
       
       <div className="mt-3 px-8 ">
       <svg xmlns="http://www.w3.org/2000/svg"  className='inline-block mr-2' height="16" width="16" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
        <span className='mr-5'>{sla.slaString}</span>
       </div>
      
       {categories.map((c,index)=>{
        return <RestaurantCategory data={c?.card?.card} showItems={ShowIndex===index?true:false} setIndex={()=>ShowIndex!=null?setShowIndex(null):setShowIndex(index)}/>
       })}
    </div>
  )
}

export default RestaurantMenu
