import React from 'react'
import { useEffect,useState } from 'react';

const useFetchData = () => {
 const[ListOfRestaurant,setListOfRestaurant]=useState([]);
 useEffect(()=>{
    fetchData();
 },[])

  const fetchData=async()=>{
     
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.498935&lng=80.268894&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   console.log("data is",data)
    const json=await data.json();
     console.log("data fetched")
     console.log("json",json);
      console.log("filtered",json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setFilteredRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   
    
  }
  return  ListOfRestaurant;
}

export default useFetchData
