import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../components/authContext";
function App() {
  const { token, login, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(token);
  useEffect(() => {
    // Function to parse URL fragments
    const getHashParams = () => {
      const hashParams = {};
      const hash = window.location.hash.substring(1);
      const params = hash.split("&");
      params.forEach((param) => {
        const [key, value] = param.split("=");
        hashParams[key] = decodeURIComponent(value);
      });
      return hashParams;
    };

    // Check if the URL has fragments
    const hashParams = getHashParams();

    if (hashParams.access_token && hashParams.refresh_token) {
      // Set the tokens in state or wherever you need them
      login(hashParams.access_token);
      // Clear the URL fragments to avoid showing sensitive information
      window.history.pushState({}, document.title, window.location.pathname);
      // Navigate to the home page
      navigate("/profile");
    }
  }, []); // Run this effect only once when the component mounts
  //   if token found then render profile page

  return (
    <div className=" flex flex-col justify-center items-center overflow-y-hidden p-0">
      <main className="flex flex-col justify-center items-center flex-grow">
        <h1 className='text-7xl font-["League_Spartan"]'>ListenSphere</h1>
        <p className="text-2xl">Connect with people who listen like you</p>
        {!token && (
          <a
            href={`http://localhost:8888/login`}
            className="w-56 my-4 text-center bg-button-green hover:bg-button-green-dark font-bold py-3 px-6 rounded-3xl border-4 border-black"
          >
            LOGIN WITH SPOTIFY
          </a>
        )}
        {token && (
          <Link
            to="/edit-profile"
            className="w-56 my-4 text-center bg-button-green hover:bg-button-green-dark font-bold py-3 px-6 rounded-3xl border-4 border-black"
          >
            EDIT PROFILE
          </Link>
        )}
      </main>
      <img
        src=".\src\assets\linesphere_main.jpg"
        alt="people listening music"
        className="object-cover min-h-[50vh] hidden sm:block mt-auto"
      />
      <img
        src=".\src\assets\linesphere_mobile.jpg"
        alt="people listening music"
        className="object-cover min-h-[50vh] sm:hidden"
      />
    </div>
  );
}

export default App;
