import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard=({resData})=>{
    const{name ,locality,avgRating,sla,cloudinaryImageId,id}=resData.info;
  
    
    return(
        <div className='w-[270px] h-100 shadow-md border-e-2 m-7'>
            <img className='rounded-xl h-[180px] w-[250px] mx-3 my-2' src={CDN_URL+cloudinaryImageId}/>
            <div className="p-2">
            <Link to={"/restaurant/"+id}><h3 className="font-bold mx-1" >{name}</h3></Link>
            <p className="font-medium my-2">
            <svg className="inline-block m-1 my-2" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>{avgRating} <svg xmlns="http://www.w3.org/2000/svg"  className="inline-block " height="11" width="11" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg> {sla.slaString} </p>
           
            <p  className="font-thin mx-1">{locality}</p>
            </div>
        </div>
    )
}

export default RestaurantCard;