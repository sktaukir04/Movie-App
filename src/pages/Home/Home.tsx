import React, { useEffect, useState } from 'react'
import './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../../components/movieList/MovieList';

// const api ='c228a3ad8d7e34d3c76551b621e5c09c'
// bakupkey = 4e44d9029b1270a757cddc766a1bcb63
interface Movie {
    original_title: string
}

const Home = () => {
    const [popularMovies, setPopularMovies] = useState<any>([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=c228a3ad8d7e34d3c76551b621e5c09c&language=en-US").then((res) => res.json()).then((data) => {
            console.log(data.results);
            setPopularMovies(data.results);
        }
        )
    }, [])
    return (
        <>
            <div className='poster'>
                <Carousel
                    showThumbs={false}
                    transitionTime={3}
                    autoPlay={true}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {popularMovies.length > 0 && (
                        popularMovies.map((movie:any) => (
                            <Link style={{textDecoration:"none",color:'white'}} to={`/movie/${movie.id}`}>
                            <div className='posterImage'>
                                    <img alt='' src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                            </div>
                            <div className='posterImage__overlay'>
                                <div className='posterImage__title'>{movie?movie.original_title:''}</div>
                                <div className='posterImage__runtime'>
                                    {movie?movie.release_date:''}
                                    <span className='posterImage__rating'>
                                        {movie?movie.vote_average:''}
                                        <i className='fas fa-star'/>{" "}
                                    </span>
                                </div>
                                <div className='posterImage__description'>
                                    {movie && movie.overview}
                                </div>
                            </div>
                            </Link>
                        ))
                    )
                    }
                </Carousel>
                <MovieList/>
            </div>
        </>
    )
}

export default Home