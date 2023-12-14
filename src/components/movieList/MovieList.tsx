import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './MovieList.css'
import { useParams } from 'react-router-dom'
type Props = {}

const MovieList = (props: Props) => {
    const [movieList,setMovieList]=useState([])
    const {type}=useParams();

    const getData = async () => {
        fetch(`https://api.themoviedb.org/3/movie/${type?type:'popular'}?api_key=c228a3ad8d7e34d3c76551b621e5c09c&language=en-US`).then((res) => res.json()).then((data) => {
            setMovieList(data.results);
        }
        )
    }
    useEffect(()=>{
        getData()
    },[])
    useEffect(()=>{
        getData()
    },[type])
  return (
    <div className='movie__list'>
        <h2 className='list__title'>{(type?type:'POPULAR').toUpperCase()}</h2>
        <div className='list__cards'>
            {
                movieList.map((movie:any)=>(
                    <Card movie={movie}/>
                ))
            }
        </div>
    </div>
  )
}

export default MovieList