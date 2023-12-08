import React from 'react'

function BgFrame() {
  return (
    <div className='w-full h-screen z-[2]'>
      <div className='absolute w-full py-5 text-xl font-semibold tracking-tighter text-center text-zinc-500'>
        Documents
      </div>
      <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-zinc-900 text-[13vw] font-semibold tracking-tighter'>
        Docs.
      </div>
    </div>
  )
}

export default BgFrame
