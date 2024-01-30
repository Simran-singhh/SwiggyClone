import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './cartSlice';



const useAddToDB = async(data,quantity) => {

const user=localStorage.getItem('user');
const userData = JSON.parse(user);
   console.log("inside useADD")
    const requestBody = {
       item:data,
       quantity:quantity
    };
    
    const response = await fetch(`http://localhost:3000/${userData.user._id}/addToCart`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    });
    const resdata=await response.json();
   return resdata
}
  
  


export default useAddToDB ;