import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './componenets/Header';
import Body from './componenets/Body';
import About from './componenets/About';
import Error from './componenets/Error';
import RestaurantMenu from './componenets/RestaurantMenu';
import ContactUs from './componenets/ContactUs';
import { Provider } from 'react-redux';

import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import RestaurantMenu from './componenets/RestaurantMenu';
import userContext from './utils/userContext';
import appStore from './utils/appStore';

import ShoppingCart from './componenets/ShoppingCart';
const AppLayout=()=>{

    const[userName,setuserName]=useState(null);
    useEffect(()=>{
    const data={
     name:"Tanya"
    }
    setuserName(data.name)
    ,[]})
    
    return(
        <Provider store={appStore}>
        <userContext.Provider value={{loggedUser:userName}}>
        <div className='app'>
              <Header/>
              <Outlet/>
        </div>
        </userContext.Provider>
        </Provider>
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
              path:"/",
              element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<ContactUs/>
            },
          
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element:<ShoppingCart/>
            }
        ],
        errorElement:<Error/>
    },
    
]);



const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
