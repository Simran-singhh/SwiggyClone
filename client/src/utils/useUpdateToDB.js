import { useEffect } from 'react';



const useUpdateToDB = async(data,quantity,dbid) => {
  console.log("insied useupdate")
const user=localStorage.getItem('user');
const userData = JSON.parse(user);
 
    const requestBody = {
       item:data,
       quantity:quantity
    };
    
    const response = await fetch(`http://localhost:3000/${userData.user._id}/${dbid}/updateItem`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    });
    
}
  
  


export default useUpdateToDB ;