export const checkValidateData= (email,password,name) => {
   
    const ispasswordvalid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
   //  let isnamevalid=true;
   
   const isnamevalid=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
                      if(!isnamevalid) return "! Name must start from capital letter"
   
   if(email!='empty') {
    const isemailvalid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    if(!isemailvalid) return "! Email is not valid";}
    if(!ispasswordvalid) return "! Password must contain an upper case character, a speacial charcter and a number and must have length >=8"
   //  if(!isnamevalid) return "Name is not valid"
   
    return null;
   }
   
   
   