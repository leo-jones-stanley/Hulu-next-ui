import React from 'react'

const results = ({result}) => {
  return (
    <div className='px-5 my-10 sm-grid sm-grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:flex flex-wrap justify-center'>
        {result.map((results)=> (<h2>{results.title}</h2>))}
    </div>
  )
}

export default results