import React from 'react'
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage'
import ServicesPage from './Pages/ServicesPage/ServicesPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/AboutPage' element={<AboutPage />} />
        <Route path='/ServicesPage' element={<ServicesPage />} />
      </Routes>
    </Router>
    </>
  );
}



export default App
