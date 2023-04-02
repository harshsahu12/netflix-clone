import axios from '../../axios';
import React, { useEffect, useState } from 'react'
import './Row.css'

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([]);

    const base_url = "http://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData()
    }, [fetchUrl])

    return (
        <>
            <h2>{title}</h2>
            <div className='row'>
                {movies.map(movie => ((isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path)) && (
                        <img className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                            key={movie.id}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                            alt={movie.name} 
                        />
                    ))
                }
            </div>
        </>
    )
}

export default Row
