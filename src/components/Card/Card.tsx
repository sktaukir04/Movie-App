import React, { useEffect, useState } from 'react'
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Skeleton } from '@material-ui/lab'

import './Card.css'
import { Link } from 'react-router-dom'

interface CardProps {
    movie: any
}

const Card = ({ movie }: CardProps) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])
    return (
        <div>
            {
                isLoading ?
                    <div className='cards'>
                        {/* <SkeletonTheme baseColor="#202020" highlightColor="#444">
                            <Skeleton height={300} duration={2} />
                        </SkeletonTheme> */}
                        <Skeleton variant="rect" width={200} height={300} animation="pulse" />
                    </div>
                    :
                    <Link to={`/movie/${movie?.id}`} style={{ textDecoration: 'none', color: 'white' }}>
                        <div className='cards'>
                            <img className="cards__img" src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}` : 'https://b2c.toursys.net/static/media/notFound.c4ba1e764e9cd9c83ef1.png'} />
                            <div className='cards__overlay'>
                                <div className='card__title'>{movie ? movie.original_title : ''}</div>
                                <div className='card__runtime'>{movie ? movie.release_date : ''}
                                    <span className='card__rating'>{movie ? movie.vote_average : ''}
                                        <i className="fas fa-star" /></span>
                                </div>
                                <div className='card__description'>
                                    {movie ? movie.overview?.slice(0, 118) + "..." : ''}
                                </div>

                            </div>
                        </div>
                    </Link>
            }
        </div>
    )
}

export default Card