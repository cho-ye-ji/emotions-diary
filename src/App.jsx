import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import NotFound from './pages/NotFound'

import { getEmotionImage } from './util/get-emotion-image'

//1. "/" 모든 일기를 조회하는 홈
//2. "/new" 새로운 일기를 작성하는 뉴페이지ㄴ
//3. "/diary" 일기를 상세히 조회하는 diary 페이지
function App() {
  const nav = useNavigate();

  const onClickButton = () =>{
    nav('/new');
  }
  return(
    <>
    <div>
      <img src={getEmotionImage(1)} />
      <img src={getEmotionImage(2)} />
      <img src={getEmotionImage(3)} />
      <img src={getEmotionImage(4)} />
      <img src={getEmotionImage(5)} />
    </div>
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/new"}> New</Link>
      <Link to={"/diary"}> Diary </Link>
    </div>
    <button onClick={onClickButton}> New page로 이동 </button>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<New />} />
      <Route path='/diary/:id' element={<Diary />} />
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </>
  ); 
}

export default App
