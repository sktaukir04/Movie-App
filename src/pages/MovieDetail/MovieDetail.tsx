import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './MovieDetail.css'
import { CircularProgress, LinearProgress } from '@material-ui/core';

interface MovieProp {
    backdrop_path: any;
    poster_path: any;
    original_title: any;
    tagline: any;
    vote_average: any;
    vote_count: any;
    runtime: any;
    release_date: any;
    genres: any;
    overview: string;
    homepage: any;
    imdb_id: any;
    production_companies: any;
}

const MovieDetail = () => {
    const [currentMovieDetail, setCurrentMovieDetail] = useState<MovieProp>();
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams();

    const getData = async () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c228a3ad8d7e34d3c76551b621e5c09c&language=en-US`).then((res) => res.json()).then((data) => {
            setCurrentMovieDetail(data);
            console.log(data);
        }
        )
    }
    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    return (
        <>
            {
                isLoading ? 
                <LinearProgress style={{color:'gold',backgroundColor:'gold'}} variant='query' color='primary'/>
                // <CircularProgress style={{color:'gold',margin:'auto',justifyContent:'center',textAlign:'center'}} size={250} thickness={1}/>

                : 
                <div className="movie-page">
                    <div className='movie__intro'>
                        <img className="movie__backgroundImage" src={currentMovieDetail?.backdrop_path ? `https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}` : 'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg'} />
                    </div>
                    <div className="movie__detail">
                        <div className="movie_leftsection">
                            <div className="movie__posterBox">
                                <img className="movie__poster" src={currentMovieDetail?.poster_path ? `https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}` : 'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg'} />
                            </div>
                        </div>
                        <div className="movie_rightsection">
                            <div className="movie_RightTop">
                                <div className='movie_name'>{currentMovieDetail ? currentMovieDetail.original_title : ''}
                                </div>
                                <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                                <div className="movie__rating">
                                    {currentMovieDetail ? currentMovieDetail.vote_average : ""} <i className="fas fa-star" />
                                    <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                                </div>
                                <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                                <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                                <div className="movie__genres">
                                    {
                                        currentMovieDetail && currentMovieDetail.genres
                                            ?
                                            currentMovieDetail.genres.map((genre: any) => (
                                                <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                            ))
                                            :
                                            ""
                                    }
                                </div>
                            </div>
                            <div className="movie__detailRightBottom">
                                <div className="synopsisText">Synopsis</div>
                                <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                            </div>
                        </div>
                    </div>
                    <div className="movie__links">
                        <div className="movie__heading">Useful Links</div>
                        {
                            currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                        }
                        {
                            currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt" style={{color:'black'}}></i></span></p></a>
                        }
                    </div>
                    <div className="movie__heading">Production companies</div>
                    <div className="movie__production">
                        {
                            currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map((company: any) => (
                                <>
                                    {
                                        company.logo_path
                                        &&
                                        <span className="productionCompanyImage">
                                            <img className="movie__productionCompany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                            <span>{company.name}</span>
                                        </span>
                                    }
                                </>
                            ))
                        }
                    </div>
                </div>

            }

        </>
    )
}

export default MovieDetail