import { useEffect,useState} from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchData from "../utils/useFetchData";
import useFetchUserData from "../utils/useFetchUserData";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";





const Body=()=>{
  const navigate=useNavigate();
  const[SearchText,setSearchText]=useState("");
  const[FilteredRestaurant,setFilteredRestaurant]=useState([]);
  // console.log("body rendered");
  const data=useFetchData();
  const dispatch=useDispatch()
  // console.log("body data is :", data)
  const user=localStorage.getItem('user');
   
  
  useEffect(()=>{
  if(FilteredRestaurant!=null&&FilteredRestaurant.length==0)
  setFilteredRestaurant(data)
  // console.log("data set")
  })
    useEffect(()=>{
      if(!user ) return;
       useFetchUserData().then((data)=>{
        data?.cart.map((i)=>dispatch(addItem(i)))
        console.log("data of user",data)}
       );
       
    },[])
  const rows = [];
  for (let i = 0; i < 10; i++) {
  
    rows.push(<Shimmer key={i} />);
   }
  const OnlineStatus=useOnlineStatus();
  if(OnlineStatus==false) return(<h1>Looks Like you are offline!!!</h1>)
  if(FilteredRestaurant==null||FilteredRestaurant.length==0) return(
    <div className="flex flex-wrap m-[120px] absolute">
     { rows}
   </div>)
   else return(
    <div className='body'>
      <div className=' lg:ml-60 xl:pl-60  xl :ml-80 sm:ml-30 my-6  ml-14 md:mx-20 md:pl-20'>
        <input type="text" className="md:mx-3 px-3 rounded-lg md:w-[430px] lg:w-[440px] xl:w-[500px] h-8 sm:w-[300px] w-[220px] focus:outline-orange-200 shadow-sm"  value={SearchText} placeholder="search for your reastaurant"onChange={(e)=>{setSearchText(e.target.value)}}></input>
        <button className="bg-orange-400 text-sm px-2 py-1 mx-1 text-white rounded-lg" onClick={()=>{
          const filteredRestaurant=data.filter((res)=>res.info.name.toLowerCase().includes(SearchText.toLowerCase()));
          setFilteredRestaurant(filteredRestaurant)
        }}>Search</button>
      </div>


      <div className=' flex flex-wrap md:ml-[120px] sm:ml-[30px] '>
        {FilteredRestaurant.map((restaurant)=>(
           <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>
        ))}
          
      </div>
    </div>
    )
    }
    export default Body;