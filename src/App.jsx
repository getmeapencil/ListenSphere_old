import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/edit-profile" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
