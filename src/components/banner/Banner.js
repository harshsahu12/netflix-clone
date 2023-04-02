import axios from '../../axios';
import React, { useEffect, useState } from 'react'
import'./Banner.css'
import requests from '../../Requests';

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() =>{
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                  Math.floor(Math.random() * request.data.results.length)
                ]
              );              
            return request;
        }

        fetchData()
    }, []);

    console.log(movie)

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...' : string
    }

  return (
    <header className='banner' 
    style={{
        background:`url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize:"cover",
        backgroundPosition:"center center",
        width:"",
        }}>
          
        <div className="banner_contents">
            <h1 className="banner_title">{movie?.title || movie?.original_name}</h1>
            <div className="banner_buttons">
                <button>Play</button>
                <button>My List</button>
            </div>
            <h1 className="banner_description">
                {truncate(movie?.overview, 150)}
            </h1>
        </div>
        
        <div className="banner_fadebottom"/>
    </header>
  )
}

export default Banner
