import React from 'react'
import { ThumbUpIcon } from  '@heroicons/react/outline'


const tumbnail = ({movie}) => {
  const base_url = "https://image.tmdb.org/t/p/original"
  const src_link = base_url+movie.backdrop_path
  return (
    <div className='group cursor-pointer p-2 transition ease-in transform sm:hover:scale-105 hover:z-50'>
        <img layout="responsive" height={1080} width={1920} src={src_link} />
  
      <div className="p-2">
      <p className="truncate max-w-md">{movie.overview}</p>
      <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
        {movie.title || movie.original_name}
      </h2>
      <p className="flex items-center opacity-0 group-hover:opacity-100">
        {movie.release_date || movie.first_air_date} •
        <ThumbUpIcon className="h-5 mx-2" /> {movie.vote_count}
      </p>
    </div>    </div>
  )
}

export default tumbnail