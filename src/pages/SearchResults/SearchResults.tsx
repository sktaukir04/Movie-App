import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../../components/Card/Card';
import './SearchResults.css';

type Props = {
  searchedMovies?: any;
};

const SearchResults: React.FC<Props> = () => {
  const location = useLocation();
  const searchedMovies = location.state;
  const { data, searchVal } = searchedMovies;

  if (!data || data.length === 0) {
    return (
      <div>
        <h1 className="searchText">No Data Found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="searchText">Results for "{searchVal}"</h1>
      <div className="searchResults">
        {data.map((movie: any) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
