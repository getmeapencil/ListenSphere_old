import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import ProfileCard from "./components/ProfileCard";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/edit-profile" element={<Edit />} />
        <Route path="/profile-card" element={<ProfileCard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
