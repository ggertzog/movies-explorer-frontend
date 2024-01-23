import { createContext, useContext, useState, useEffect } from "react";

const MoviesContext = createContext();

export const useMoviesContext = () => {
  return useContext(MoviesContext);
}

export const MoviesProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState(returnSearchQuery());
  const [searched, setSearched] = useState(returnSearched());
  const [shortMovie, setShortMovie] = useState(returnShortMovie());
  const [foundMovies, setFoundMovies] = useState(returnFoundMovies());

  function returnSearchQuery() {
      const savedSearchQuery  = localStorage.getItem('searchQuery') ?? '';
      return savedSearchQuery
  }

  function returnSearched() {
      const savedSearched = localStorage.getItem('searched') ?? false;
      return savedSearched === 'true';
  }

  function returnShortMovie() {
      const savedShortFilm = localStorage.getItem('shortFilm') ?? false;
      return savedShortFilm === 'true';
  }

  function returnFoundMovies() {
      const storedFoundMovies = localStorage.getItem('foundMovies') ?? '[]';
      return JSON.parse(storedFoundMovies);
  }

  const resetMoviesContext = () => {
    setSearchQuery('');
    setSearched(false);
    setShortMovie(false);
    setFoundMovies([]);
  };

  useEffect(() => {
    localStorage.setItem('searchQuery', searchQuery);
    localStorage.setItem('searched', searched);
    localStorage.setItem('shortMovie', shortMovie);
    if (foundMovies.length > 0) {
      localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
    }
  }, [searchQuery, searched, shortMovie, foundMovies]);

  const contextValue = {
    searchQuery,
    setSearchQuery,
    searched,
    setSearched,
    shortMovie,
    setShortMovie,
    foundMovies,
    setFoundMovies,
    resetMoviesContext,
  };

  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
    </MoviesContext.Provider>
  );
}