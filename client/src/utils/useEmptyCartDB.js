const useEmptyCartDB = async() => {
    console.log("insied usedelete")
  const user=localStorage.getItem('user');
  const userData = JSON.parse(user);
   
      const response = await fetch(`http://localhost:3000/${userData.user._id}/deleteCart`, {
          method: 'POST',
      });
     
  }
  export default useEmptyCartDB ;