import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between
    font-bold px-10 py-5 mb-10'>
      <div>
        <h1 className="text-6xl">IsioloTimes</h1>
        <h2 className="mt-5 md:mt-0">where every News counts</h2>
      </div>
<p className='mt-5 md:mt-2 text-gray-400 max-w-sm' >
    News , Sports , Agriculture ,the latest in technology
and more</p>

    </div>
  )
}

export default Banner
