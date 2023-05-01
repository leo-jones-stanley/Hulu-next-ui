import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import requests from '@/utils/requests'

import axios from 'axios'
import Results from '@/components/results';


const inter = Inter({ subsets: ['latin'] })

export default function Home({results}) {
  console.log(results)
  return (
    <div> 
      
      <title>Hulu-clone By Leo Jones Stanley</title>
      <Header />
      <Nav />
      <Results result={results} />
    </div>
  )
}

export async function getServerSideProps(context){
  const genere = context.query.genere;

  try{
    const response = await axios.get(`https://api.themoviedb.org/3${requests[genere].url}`)
    console.log(response)
    return{
      props:{
        results : response.data.results,
      }}
  }catch(error){
    console.log(error)
    return{
      props:{
        results : [],
      }}
  }
  
  
}