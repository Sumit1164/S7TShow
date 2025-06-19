import React from 'react'
import { Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/bookings' element={<MyBookings />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </>
  )
}

export default App
