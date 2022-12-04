import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Tour from './Pages/Tour';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Tour />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
