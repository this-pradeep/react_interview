import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RenderPerSecond from './components/RenderPerSecond';
import MultiLevelDropDown from './components/MultiLevelDropDown';

function App() {

  return (
    <div className='p-5'>
      <div className='p-5 bg-indigo-50 font-semibold text-center text-indigo-600 border-2 border-indigo-500 rounded-xl'>
        <h1 className='text-3xl'>React Interview Problems</h1>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {/* multilevel dropdown menu */}
        <div className='p-5  mt-4 bg-yellow-50 font-semibold text-center text-yellow-600 border-2 border-yellow-500 rounded-xl'>
        <h1 className='text-2xl'>Multi Level Dropdown Menu</h1>
          <MultiLevelDropDown />
        </div>
        {/* render per second component begins */}
        <div className='p-5  mt-4 bg-red-50 font-semibold text-center text-red-600 border-2 border-red-500 rounded-xl'>
          <h1 className='text-2xl'>Render Per Second</h1>
          <RenderPerSecond/>
        </div>
      </div>
      
    </div>
  )
}

export default App
