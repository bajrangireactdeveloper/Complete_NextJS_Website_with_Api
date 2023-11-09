import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Movies = ({apiData}) => {
    const img = 'https://image.tmdb.org/t/p/original';
  return (
   <>
   
  <div style={{
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    flexWrap:'wrap'
  }}>


  {
        apiData.map((item)=>{
            return(
                <>
                <Link href={`${item.id}`} className='text-center p-4 m-4'>
                    <h2>{item.title}</h2>
                    <h2>{item.release_date}</h2>
                    <div className='flex justify-center'>
                    <Image className='rounded-2xl' src={img+item.poster_path} width={200} height={200} alt='img' />
                    </div>
                </Link>
                </>
            )
        })
    }

  </div>

   </>
  )
}

export default Movies
