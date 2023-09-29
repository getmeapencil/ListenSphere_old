import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import ProfileCard from "./components/ProfileCard";
import SongCard from "./components/SongCard";
import Navigation from "./components/Navigation";
import Search from "./pages/Search";
import Likes from "./pages/Likes";
import Profile from "./pages/Profile";
import "./App.css";
import Login from "./pages/login";
import Callback from "./pages/Callback";
import ProtectedRoute from "./utils/protectedRoute";
import ArtistPage from "./pages/ArtistPage";
import AuthContext from "./components/authContext";
import { useState } from "react";

function App() {
  const [token, setToken] = useState("");
  const login = (newToken) => {
    setToken(newToken);
  }
  const logout = () => {
    setToken("");
  }
  return (
    <AuthContext.Provider value={{token,login,logout}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit-profile" element={<Edit />} />
          <Route path="/profile-card" element={<ProfileCard />} />
          <Route path="/song-card" element={<SongCard />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/search" element={<Search />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/profile" element={<Profile />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/edit-profile" element={<Edit />} exact />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/artist" element={<ArtistPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
