import React, { useState } from 'react'
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

interface HeaderProps {
  input?: any;
  results?: any;
}

const Header: React.FC<HeaderProps> = () => {
  const [searchVal, setSearchVal] = useState("");
  const navigate = useNavigate();

  const getData = async () => {
    return await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c228a3ad8d7e34d3c76551b621e5c09c&query=${searchVal}`).then((res) => res.json()).then((data) => {
      // console.log(data.results);
      const datas = data.results;
      navigate(`/search/`,{state:{data:datas,searchVal:searchVal}})
    }
    ).catch((err) => console.log(err)
    )
  }
  const handleSearch = (e: any) => {
    e.preventDefault();
    // console.log(searchVal);
    setSearchVal("")
    getData();
  }
  return (
    <div className='header'>
      <div className='headerLeft'>
        <Link to={'/'}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png' alt='logo' className='logo' /></Link>
        <Link to={'/movies/popular'}><span>Popular</span> </Link>
        <Link to={'/movies/top_rated'}><span>Top Rated</span></Link>
        <Link to={'/movies/upcoming'}><span>Upcoming</span></Link>
      </div>
      <div className="header_right">
        <form action="" className='searchform' onSubmit={handleSearch}>
          <input type="text" value={searchVal} onChange={(e: any) => setSearchVal(e.target.value)} />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Header