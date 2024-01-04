import { useEffect,useState} from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchData from "../utils/useFetchData";


const Body=()=>{
  const[SearchText,setSearchText]=useState("");
  const[FilteredRestaurant,setFilteredRestaurant]=useState([]);
  console.log("body rendered");
  const data=useFetchData();
  console.log("body data is :", data)
  
  useEffect(()=>{
  if(FilteredRestaurant.length==0)
  setFilteredRestaurant(data)
  console.log("data set")
  })
  
  const rows = [];
  for (let i = 0; i < 10; i++) {
  
    rows.push(<Shimmer key={i} />);
   }
  
  // const fetchData=async()=>{
  //   const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.498935&lng=80.268894&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //   console.log("data is",data)
  //   const json=await data.json();
  //    console.log("data fetched")
  //    console.log("filtered",json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //   setListOfRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //   setFilteredRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  //   console.log(json);
  // }
 
  const OnlineStatus=useOnlineStatus();
  if(OnlineStatus==false) return(<h1>Looks Like you are offline!!!</h1>)
  if(FilteredRestaurant==null||FilteredRestaurant.length==0) return(
    <div className="flex flex-wrap m-[120px] ">
     { rows}
   </div>)
   else return(
    <div className='body'>


      <div className='my-6  mx-40 pl-40'>
        <input type="text" className="mx-3 px-3 rounded-lg md:w-[600px] h-8 sm:w-[300px] focus:outline-orange-200 shadow-sm"  value={SearchText} placeholder="search for your reastaurant"onChange={(e)=>{setSearchText(e.target.value)}}></input>
        <button className="bg-orange-400 px-2 py-1 text-white rounded-lg" onClick={()=>{
          const filteredRestaurant=data.filter((res)=>res.info.name.toLowerCase().includes(SearchText.toLowerCase()));
          setFilteredRestaurant(filteredRestaurant)
        }}>Search</button>
      </div>


      <div className=' flex flex-wrap ml-[120px]'>
        {FilteredRestaurant.map((restaurant)=>(
           <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>
        ))}
          
      </div>
    </div>
    )
    }
    export default Body;