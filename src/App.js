import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovie] = useState([
    {
      Title: "Blade Runner 2049",
      Year: "2017",
      imdbID: "tt1856101",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg",
    },
    {
      Title: "Blade Runner 2049: To Be Human: - Casting Blade Runner 2049",
      Year: "2018",
      imdbID: "tt7879362",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjRjZDVkMTMtMzZlZC00YzBhLWJkYjQtNWVjNzVhNzg1NjAxXkEyXkFqcGdeQXVyMjA3NzQyMA@@._V1_SX300.jpg",
    },
    {
      Title: "Blade Runner 2049 Movie Special",
      Year: "2017",
      imdbID: "tt7491656",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYzc1MWU2OGItNjAyOS00ZTZmLThiNjUtNGQ0ZDY1ZGNmODQ4XkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg",
    },
  ]);

  return (
    <div className="App">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
