import React from 'react'
import Thumbnail from './tumbnail'


const results = ({result}) => {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:flex flex-wrap justify-center">
    {result.map((resul) => (
      <Thumbnail key={result.id} movie={resul} />
    ))}
  </div>
  )
}

export default results