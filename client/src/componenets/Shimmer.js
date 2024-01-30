import React from 'react'

const Shimmer = () => {
   
  return (
    <div className=' w-[150px] h-[200px] sm:w-[180px] sm:h-[250px] md:w-[250px] md:h-[300px] pb-2 shadow-md m-7 bg-slate-50 border-e-2 animate-pulse'>
      <div className='rounded-xl md:h-[180px] md:w-[200px] md:mx-5  sm:w-[150px] sm:h-[140px] w-[120px] h-[90px] mx-2 my-2 bg-slate-200'></div>
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

