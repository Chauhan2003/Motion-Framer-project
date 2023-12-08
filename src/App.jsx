import React from 'react'
import BgFrame from './components/BgFrame'
import ForeFrame from './components/ForeFrame'

function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800 fixed'>
      <BgFrame />
      <ForeFrame />
    </div>
  )
}

export default App
