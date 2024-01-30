
import { MENU_URL } from './constants'
import  { useEffect,useState } from 'react'


const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState([])
  useEffect(()=>{
    fetchMenu();
    
  },[])

  const fetchMenu=async()=>{
    const data=await fetch(MENU_URL + resId)
    const json=await data.json();
    // console.log(json)
    // console.log(json.data.cards);
    setresInfo(json?.data?.cards)
   
  }
  return resInfo;
}

export default useRestaurantMenu
