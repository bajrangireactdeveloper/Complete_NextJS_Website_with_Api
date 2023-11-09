import React from 'react'
import Image from 'next/image';

const FetchData = async (id) =>{
    const api = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=00d0dcceb438b38c74cde69eee364948`);
  
    const apiData = await api.json();
    return apiData;
  
  }

const page = async ({params: {id}}) => {
    const img = 'https://image.tmdb.org/t/p/original';
    const apiDataFetch = await FetchData(id);
    console.log("this is id",apiDataFetch);
  return (
    <>
    <div className='text-center'>
        <h2>{apiDataFetch.title}</h2>
        <h2>{apiDataFetch.release_date}</h2>
        <div className='flex justify-center'>
        <Image className='rounded-2xl' src={img+apiDataFetch.backdrop_path} width={1200} height={800} alt='img' />
        </div>
    </div>
    </>
  )
}

export default page
