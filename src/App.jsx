import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import ProfileCard from "./components/ProfileCard";
import SongCard from "./components/SongCard";
import Navigation from "./components/Navigation";
import Search from "./pages/Search";
import Likes from "./pages/Likes";
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/edit-profile" element={<Edit />} />
        <Route path="/profile-card" element={<ProfileCard />} />
        <Route path="/song-card" element={<SongCard />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/search" element={<Search />} />
        <Route path="/likes" element={<Likes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
