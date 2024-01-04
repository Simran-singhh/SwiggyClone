import React from 'react'

const Shimmer = () => {
    console.log("shimmer")
  return (
    <div className='w-[270px] h-100  shadow-md mx-6 mb-6  bg-slate-50 border-e-2 animate-pulse'>
      <div className='rounded-xl h-[180px] mx-3 my-2  w-[250px] bg-slate-200'></div>
      <div className="flex-1 space-y-2 py-2 px-5">
      <div className="h-2 bg-slate-200 rounded py-2"></div>
      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="h-2 bg-slate-200 rounded col-span-1"></div>
          <div className="h-2 bg-slate-200 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-200 rounded mb-2"></div>
      </div>
      </div>
    </div>
  )
}

export default Shimmer

