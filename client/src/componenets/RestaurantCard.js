
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard=({resData})=>{
    const{name ,locality,avgRating,sla,cloudinaryImageId,id}=resData.info;
    
    
    return(
        <div className=' w-[170px] h-[220px] sm:w-[180px] sm:h-[250px] md:w-[270px] md:h-[320px] pb-2 shadow-md border-e-2 m-7  m='>
            <img className='rounded-xl md:h-[180px] md:w-[230px] md:mx-5  sm:w-[150px] sm:h-[140px] w-[150px] h-[90px] mx-2 my-2' src={CDN_URL+cloudinaryImageId}/>
            <div className="p-2">
            <Link to={"/restaurant/"+id}><h3 className="font-bold sm:text-sm text-xs md:text-lg mx-1" >{name}</h3></Link>
            <p className=" ms:font-medium font-normal sm:my-2 text-xs md:text-sm my-1">
            <svg className="inline-block mr-1   sm:h-4 sm:w-3 h-3 w-2 text-sm" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>{avgRating} <svg xmlns="http://www.w3.org/2000/svg "  className="inline-block sm:h-2 sm:w-2 h-1 w-1"  viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg> {sla.slaString} </p>
           
            <p  className="font-thin mx-1 mb-1 sm:text-sm text-xs">{locality}</p>
            </div>
        </div>
    )
}

export default RestaurantCard; 