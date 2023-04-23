import React from 'react';

import {Navigate} from 'react-router-dom'
import Home from '../pages/Home';
import Cookies from 'js-cookie';

const useAuth=()=>{
  const user= Cookies.get('auth_cookie');
  if(user){
    return true
  } else {
    return false
  }
}

const  ProtectedRoutes=(props) =>{

  const auth=useAuth()

  return auth?<Home/>: <Navigate to="/login"/>
}

export default ProtectedRoutes;