import React from 'react'
import ItemsList from './ItemsList';


const RestaurantCategory = ({data,showItems,setIndex}) => {
    
    const{title}=data;
   
   
    const handleClick=()=>{
          setIndex();
          showItems=!showItems;
    }
  
  return (
    <div className="w-10/12  p-4 ml-20 mt-10 mb-8  shadow-md cursor-pointer" >
        <div className='flex justify-between'  onClick={handleClick}>
      <h1>{title} ({data.itemCards.length!=null?(data.itemCards.length):""})</h1>
      <button onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></button>
      </div >

    { showItems && <ItemsList items={data.itemCards}/>}
    </div>
  )
}

export default RestaurantCategory
