import React, { createContext, useState, useEffect } from "react";
import Cookies from 'js-cookie';
import axios from 'axios';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const user_cookie = Cookies.get('auth_cookie');



  const DetailUser = (cookie) => {
    let baseURL = "http://localhost:8000/userinfo/"
    console.log(cookie)
    const body = {
      "token": cookie,
    };

    axios.post(baseURL, body).then((response) => {
      setUser(response.data.username)
    }).catch(error=>{
      console.log("token invalido")
    });
  }   

  if(user_cookie){
    useEffect(() => {
          DetailUser(user_cookie)    
      }, [user_cookie]);
  }

 

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
