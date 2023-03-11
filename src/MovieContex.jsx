import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [header, setHeader] = useState("Trending");

  //   LocalStorage State
  const [favorites, setFavorites] = useState("fav", []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=a76d97f1e11afaeab6339a4234ebb8d0&language=en-US&page=1"
    );
    const movies = await data.json();
    setMovies(movies.result);
    setFiltered(movies.result);
    setHeader("Trending");
    setActiveGenre(0);
  };

  const fetchSearch = async (query) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=a76d97f1e11afaeab6339a4234ebb8d0&language=en-US&query=${query}&page=1&include_adult=false`
    );
  };

  const fetchNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=a76d97f1e11afaeab6339a4234ebb8d0&language=en-US&page=1"
    );
    const movies = await data.json();
    setMovies(movies.results);
    setFiltered(movies.results);
    setHeader("Now playing");
    setActiveGenre(0);
  };

  const fetchTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=a76d97f1e11afaeab6339a4234ebb8d0&language=en-US&page=1"
    );
    const movies = await data.json();
    setMovies(movies.results);
    setFiltered(movies.results);
    setHeader("Top rated");
    setActiveGenre(0);
  };

  const fetchUncoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=a76d97f1e11afaeab6339a4234ebb8d0&language=en-US&page=1"
    );
    const movies = await data.json();
    setMovies(movies.results);
    setFiltered(movies.results);
    setHeader("Uncoming");
    setActiveGenre(0);
  };

  const addToFavorites = (movie) => {
    let isOnArray = false;
    favorites.map((fav) => {
      if (fav.id === movie.id) {
        isOnArray = true;
      }
    });

    if (isOnArray) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavorites((prevState) => [...prevState, movie]);
    }
  };

  const getFavourites = () => {
    setMovies(favorites);
    setFiltered(favorites);
    setHeader("Your favourites");
    setActiveGenre(0);
  };

  const isFav = (id) => {
    let fav = favorites.filter((fav) => fav.id === id);
    return fav.length === 0 ? true : false;
  };

  return (
    <MovieContext.Provider
      value={{
        header,
        setHeader,
        addToFavorites,
        filtered,
        setFiltered,
        fetchPopular,
        movies,
        setMovies,
        activeGenre,
        setActiveGenre,
        fetchSearch,
        getFavourites,
        isFav,
        fetchNowPlaying,
        fetchTopRated,
        fetchUncoming,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
