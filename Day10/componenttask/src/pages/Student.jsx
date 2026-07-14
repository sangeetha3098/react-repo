import React from 'react'

const Banner = ({detail}) => {
  return (
    <>
    <div className='bg-green-200 p-10 flex gap-5 text-white'>
        {detail.map((student,i)=>(
            <div key={i} className='bg-purple-500 w-40 h-30 p-2 text-center'>
                <h1>{student.name}</h1>
                <p>{student.age}</p>
                <p>{student.course}</p>
            </div>
        ))}
    </div>
    </>
  )
}

export default Banner