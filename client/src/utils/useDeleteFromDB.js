const useDeleteFromDB = async(item,dbid) => {
  console.log("insied usedelete")
const user=localStorage.getItem('user');
const userData = JSON.parse(user);
 
    const response = await fetch(`http://localhost:3000/${userData.user._id}/${dbid}/deleteItem`, {
        method: 'POST',
    });
   
}
export default useDeleteFromDB ;