import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/Header.tsx'
import Gear from './components/Gear.tsx'
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path='/gear' element={<Gear />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
