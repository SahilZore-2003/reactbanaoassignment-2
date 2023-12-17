import React, { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import UserList from './Components/UserList/UserList'
import Userdetails from './Components/Userdetalis/Userdetails'

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<UserList />} />
      <Route path='/user/:id' element={<Userdetails />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
