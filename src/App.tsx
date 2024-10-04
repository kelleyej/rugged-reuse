import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/Header.tsx'
import Gear from './components/Gear.tsx'
import Error from './components/Error.tsx'
import Category from './components/Category.tsx'

export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path='/gear' element={<Gear />} />
        <Route path='/gear/:category' element={<Category />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>

  )
}


