import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
     <div className='mx-50 h-300  border-2  bg-blue-200'>
        <div className='bg-red-500 w-80 mt-5 p-10 translate-x-25 border-2 border-black text-red-500 translate-y-50 h-80'>Hello</div>
        <div className='w-80 h-80 translate-x-160  -translate-y-30  text-black bg-black'>Hello</div>
        <div className='w-100 -mt-50 mb-20 ml-80 h-100 text-center  justify-center bg-red-500 text-red-500'>Hello
        </div>
        <div className='bg-red-500 text-red-500 w-80 h-80 border-2 border-black -translate-y-40 translate-x-25 '>Hello</div>
        <div className='bg-black w-80 h-80 translate-x-150 text-black -translate-y-120 '></div>
     </div>
    </>
  )
}

export default App
