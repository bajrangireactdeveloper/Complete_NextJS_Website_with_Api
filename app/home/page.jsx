import React from 'react';
import Movies from '../components/Movies';

const FetchData = async () =>{
  const api = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=00d0dcceb438b38c74cde69eee364948');

  const apiData = await api.json();
  return apiData;

}

const page =  async() => {

  const apiResultData = await FetchData();
  //console.log(apiResultData.results);
  return (
   <>
    <Movies apiData={apiResultData.results} />
   
   </>
  )
}

export default page
