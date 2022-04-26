import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Post from './components/Post'
import Home from './components/Home'
import Form from './components/Form'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/post' element={ <Post />} />
      <Route path='/form' element={ <Form /> } />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App