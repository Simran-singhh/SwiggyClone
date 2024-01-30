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

import appStore from './utils/appStore';
import LoginWrapper from './componenets/LoginWrapper';
import ShoppingCart from './componenets/ShoppingCart';

import OrderPlaced from './componenets/OrderPlaced';
import Login from './componenets/Login';

const AppLayout=()=>{

   
    
    
    return(
        <Provider store={appStore}>
       
        <div className='app'>
              <Header/>
              <Outlet/>
        </div>
      
        </Provider>
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
              path:"/home",
              element:<Body/>
            },
            {
                path: '/login',
                element: <Login />, 
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
            },
            {
                path:"/orderplaced",
                element:<OrderPlaced/>
            },
        ],
        errorElement:<Error/>,
    }, 
]);



const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
