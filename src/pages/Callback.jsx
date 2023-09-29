// Callback.js
import React, { useEffect,useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { PageLoader } from '../components/loader';

function Callback() {

  const navigate = useNavigate();
  useEffect(() => {
      const hash = window.location.hash;
      let token = window.localStorage.getItem("token");
  
      if (!token && hash) {
        token = hash
          .substring(1)
          .split("&")
          .find((elem) => elem.startsWith("access_token"))
          .split("=")[1];
  
        window.location.hash = "";
        window.localStorage.setItem("token", token);
      }
  
      setToken(token);
      navigate("/artist");

    }, []);
  
    

  return (
    <div>
     <PageLoader/>
    </div>
  );
}

export default Callback;
