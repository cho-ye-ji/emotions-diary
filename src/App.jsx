import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import NotFound from './pages/NotFound'

//1. "/" 모든 일기를 조회하는 홈
//2. "/new" 새로운 일기를 작성하는 뉴페이지
//3. "/diary" 일기를 상세히 조회하는 diary 페이지
function App() {
  return(
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/new' element={<New />}></Route>
    <Route path='/diary' element={<Diary />}></Route>
    <Route path='*' element={<NotFound />}/>
  </Routes>
  ); 
}

export default App
