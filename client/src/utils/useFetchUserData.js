const useFetchUserData = async() => {
    console.log("insied")
  const user=localStorage.getItem('user');
  const userData = JSON.parse(user);
   
      const response = await fetch(`http://localhost:3000/${userData.user._id}/fetchFromCart`, {
          method: 'GET',
        });
      const data=await response.json();
     return data;
      
  }
  export default useFetchUserData;