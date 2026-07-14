import React from 'react'

const Banner = ({detail}) => {
  return (
    <>
    <div className='bg-green-200 p-10 flex gap-5 text-white'>
        {detail.map((items,i)=>(
            <div key={i} className='bg-purple-500 w-20 h-10 p-2 text-center'>
                <h1>{items}</h1>
            </div>
        ))}
    </div>
    </>
  )
}

export default Banner