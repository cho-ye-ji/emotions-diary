// import { useState } from 'react'
import './App.css'
import { useReducer } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Edit from './pages/Edit'
import NotFound from './pages/NotFound'

import Button from './components/Button'
import Header  from './components/Header'

import { getEmotionImage } from './util/get-emotion-image'

//임시 일기 데이터
const mockData = [
  {
    id: 1,
    createDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용"
  },
  {
    id: 2,
    createDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용"
  }
]

function reducer(state, action){
  return state;
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);

  //새로운 일기 추가

  //기존 일기 추가

  //기존 일기 삭제
  
  return(
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  ); 
}

export default App
