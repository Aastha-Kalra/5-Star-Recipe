import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return(
   <div className="bg-black  min-h-screen">
     <BrowserRouter>
    <Navbar/>
    <Routes>
          
        </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
